import { Link } from "react-router-dom";

function Drawer(props) {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className="d-flex justify-between align-center">
                    <h2>Об авторе</h2>

                    <Link to="/news">
                    <img onClick={props.onClose} className="cu-p" width={15} height={15} src="/img/close.svg" alt="close"/>
                    </Link>
                </div>

                {/* <div className="d-flex align-center">
                    <img width={250} height={250} src="/img/i.jpg" alt="me"/>
                </div> */}

                <p>
                    Сборник статей.
                </p>
                <p>
                    <b>Автор:</b> Исаев Максим Алексеевич.
                </p>
                <p>
                    Студент 4 курса, группы ИВТ-91.
                </p>
                <p>
                    Мне 20 лет. Живу в городе Самара.
                </p>
                <h4>
                    2022г.
                </h4>

            </div>
        </div >
    );
}

export default Drawer;