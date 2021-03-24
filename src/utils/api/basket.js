import { basket } from "../data/basket";

const list = () => Promise.resolve(basket);

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
  list,
  create,
  remove,
};

export default basketApi;
