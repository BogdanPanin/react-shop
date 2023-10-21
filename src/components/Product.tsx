/* eslint-disable */
import { IProduct } from "../store/type";
import { useSetRecoilState } from "recoil";
import "../style/product.scss";
import { cartState } from "../store/atom";

const Product = ({
  productOnly,
  id,
  title,
  description,
  image,
  rating,
  price,
}: IProduct) => {
  const setCart = useSetRecoilState<any[any]>(cartState);
  const addToCart = (product: typeof productOnly) => {
    setCart((cart: any) => [...cart, product]);
  };

  return (
    <>
      <div className="product" key={id}>
        <h1 className="product__header">{title}</h1>
        <img className="product__image" src={image} alt="IMAGE" />
        <p className="product__description">{description}</p>
        <div className="product__rating">
          <p className="product__text">Rating {rating.rate} ⭐</p>
          <p className="product__text">Count {rating.count}</p>
        </div>
        <p
          style={{ textAlign: "end", fontSize: "22px" }}
          className="product__text"
        >
          {price} $
        </p>
        <button
          onClick={() => addToCart(productOnly)}
          className="product__button"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Product;
