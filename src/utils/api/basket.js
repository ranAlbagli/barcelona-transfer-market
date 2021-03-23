import { basket } from "../data/basket";

const get = () => Promise.resolve(basket);

const create = (product) => {
  basket.push(product);
  return Promise.resolve(basket);
};

const remove = (product) => {
  const removedItemIdx = basket.findIndex(({ id }) => product.id === id);
  basket.splice(removedItemIdx, 1);
  return Promise.resolve(basket);
};

const basketApi = {
  get,
  create,
  remove,
};

export default basketApi;
