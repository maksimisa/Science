import React from "react";

function Item(props) {

    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="item d-flex justify-between align-center">
            <p>
                <a href={props.url}>
                    {props.title}
                </a>
                {props.newsSite}
            </p>
            {/* <div onClick={onClickFavorite}>
                <img className="mr-10" width={20} height={20} src={isFavorite ? '/img/like.png' : '/img/unlike.png'} alt="favorite" />
            </div> */}
        </div>
    );
}

export default Item;