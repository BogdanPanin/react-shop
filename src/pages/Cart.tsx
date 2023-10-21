import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, totalPrice } from "../store/atom";
import { Basket } from "../components";
import { IProduct } from "../store/type";
import BasketClear from "../components/BasketClear";
import "../style/cart.scss";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const total = useRecoilValue(totalPrice);
  const compliteClick = () => {
    alert("You have successfully placed your order!");
    setCart([]);
  };
  return (
    <>
      {!cart.length ? (
        <BasketClear />
      ) : (
        cart.map((product: IProduct) => (
          <Basket
            description={product.description}
            rating={product.rating}
            category={product.category}
            productOnly={product}
            id={product.id}
            key={product.id}
            price={product.price}
            image={product.image}
            title={product.title}
          />
        ))
      )}
      {!cart.length ? (
        ""
      ) : (
        <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
          <p className="cart__text">{`${total}$ `}</p>
          <button onClick={() => compliteClick()} className="cart__complite">
            Complite
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
