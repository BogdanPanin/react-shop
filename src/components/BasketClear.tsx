import { Link } from "react-router-dom";
import "../style/basketClear.scss";

const BasketClear = () => {
  return (
    <div className="basket-clear">
      <div className="basket-clear__heading">
        <h1>Корзина пустая</h1>
      </div>
      <p className="basket-clear__paragraf">
        Вероятней всего, вы не заказывали ещё товар. Для того, чтобы заказать
        товар, перейди на главную страницу.
      </p>
      <Link to="/react-shop/">
        <button className="basket-clear__button">
          <p className="">Вернуться назад</p>
        </button>
      </Link>
    </div>
  );
};

export default BasketClear;
