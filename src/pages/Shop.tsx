import { productsState } from "../store/atom";
import { useRecoilValue } from "recoil";
import { Product } from "../components";

const Shop = () => {
  const products = useRecoilValue(productsState);

  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product: typeof products) => (
          <Product
            productOnly={product}
            key={product.id}
            id={product.id}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
            title={product.title}
            category={product.category}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
