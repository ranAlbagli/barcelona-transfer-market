import { products } from "../data/products";

const list = () => {
  return Promise.resolve(products);
};

const update = (product) => {
  const updatedProductIdx = products.findIndex(({ id }) => product.id === id);
  products.splice(updatedProductIdx, 1, product);
  return Promise.resolve(products);
};

const productsApi = {
  list,
  update,
};

export default productsApi;
