import { atom, selector } from "recoil";
import axios from "axios";

export const productsState = selector({
  key: "productsState",
  get: async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      return response.data || [];
    } catch (error) {
      console.log(`Error: ${error}`);
      return [];
    }
  },
});

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const totalPrice = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const cart = get(cartState);
    // eslint-disable-next-line
    const total = cart.reduce((prev, curr: any) => prev + curr.price, 0);

    return total;
  },
});
