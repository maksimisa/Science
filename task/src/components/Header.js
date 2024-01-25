import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
      <div className="d-flex align-center">
          <img width={80} height={80} src="/img/logo1.png" alt="logotype" />
          <div>
            <h3 className="text-uppercase">Сборник статей</h3>
          </div>
      </div>
      </Link>
      <ul className="d-flex">
        {/* <li className="mr-20">
            <img className="cu-p" width={25} height={25} src='/img/unlike.png' alt="all_favorite" />
          <span>Избранное</span>
        </li> */}

        <Link to="/about">
        <li>
          <img onClick={props.onClickAbout} className="cu-p" width={25} height={25} src='/img/me.png' alt="about" />
          <span>Об авторе</span>
        </li>
        </Link>
      </ul>

    </header >
  );
}

export default Header;