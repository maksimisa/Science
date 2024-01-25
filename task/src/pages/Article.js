import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ScrollButton from '../components/ScrollButton';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [articlesSame, setArticlesSame] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles?id=${id}`);
      const article = (await response.json())[0];
      setArticle(article)

      const responseSame = await fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=3&title_contains=${article?.title.split(' ')[0]}`);
      const articlesSame = await responseSame.json();


      setArticlesSame(articlesSame)
    }

    fetchData();
  })

  return (
    <div className="wrapper clear">
      <Link to="/news">
        <h4>Ко всем новостям</h4>
      </Link>
      <div className=" article content p-40">
        <br />
        <span>Номер космической новости: {article?.id}</span>
        <br />
        <h2>{article?.title}</h2>
        <br />
        <img className="imgs" width={1000} height={500} src={article?.imageUrl} />
        <br />
        <h3 className="anotation">Анотация:</h3>
        <p>{article?.summary}</p>
        <div className="d-flex justify-between align-center">
          <p>Дата публикации: {article?.publishedAt}</p>
          <p>Дата обновления: {article?.updatedAt}</p>
        </div>
        <div className='link'>
          <h3><a href={article?.url}>Источник</a></h3>
        </div>
        <br />
      </div>
      <ScrollButton />

      {/* <br />
      <h1>Похожие новости</h1>

      {
        articlesSame.map(articlesSame => (
          <div>
            <br />
            <span>Номер космической новости: {articlesSame.id}</span>
            <br />
            <Link to=
              {`/news/${articlesSame.id} `} >
            <h1> {articlesSame.title} </h1>
            </Link>
            <br />
            <img className="imgs" src={articlesSame.imageUrl} />
            <br />
          </div>
        ))
      } */}
    </div>
  )
}

export default Article