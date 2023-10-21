export interface Irating {
  rate: number;
  count: number;
}

export interface IProduct {
  productOnly?: IProduct;
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  rating: Irating;
}
