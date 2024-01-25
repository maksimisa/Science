import React from 'react';
import { Link, Route} from 'react-router-dom';
import Drawer from '../components/Drawer';
import Header from '../components/Header';
import Item from '../components/Item';
import ScrollButton from '../components/ScrollButton';


function Home() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [aboutOpened, setAboutOpened] = React.useState(false);
  // const [favorite, setFavorites] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">

      {aboutOpened ? <Drawer onClose={() => setAboutOpened(false)} /> : null}

      <Header onClickAbout={() => setAboutOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по: "${searchValue}"` : 'Все статьи'}</h1>
          <div className="search-block">
            <input onChange={onChangeSearchInput} placeholder="Поиск..." />
          </div>
        </div>

        {items.filter((obj) => obj.title.includes(searchValue)).map((obj) => (
            <Link to=
              {`/news/${obj.id} `} >
            <Item
              id={obj.id}
              title={obj.title}
              url={obj.url}
              newsSite={obj.newsSite} />
            </Link>
        ))}
      </div>
      <ScrollButton />
    </div>
  );
}
export default Home;