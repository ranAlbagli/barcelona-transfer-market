import { products } from "../data/products";

const get = () => {
  return Promise.resolve(products);
};

const update = (product) => {
  const updatedProductIdx = products.findIndex(({ id }) => product.id === id);
  products.splice(updatedProductIdx, 1, product);
  return Promise.resolve(products);
};

const productsApi = {
  get,
  update,
};

export default productsApi;
