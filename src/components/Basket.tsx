/* eslint-disable */
import { cartState } from "../store/atom";
import { IProduct } from "../store/type";
import "../style/cart.scss";
import { useSetRecoilState } from "recoil";

const Basket = ({ title, image, price, id }: IProduct) => {
  const setCart = useSetRecoilState(cartState);
  const removeCart = () => {
    setCart((cart) =>
      cart.filter((productOnly: IProduct) => productOnly.id !== id)
    );
  };

  return (
    <div className="cart">
      <p className="cart__text">{title}</p>
      <img className="cart__image" src={image} alt="Images" />
      <p className="cart__text">{`${price}$`}</p>
      <button onClick={() => removeCart()} className="cart__button">
        Remove
      </button>
    </div>
  );
};

export default Basket;
