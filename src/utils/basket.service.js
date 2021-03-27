const calculateTotal = (basketItems) => {
  return basketItems.reduce((acc, product) => {
    const { price, quantity, saleId } = product;
    if (saleId) {
      const salePrice = salasMap[saleId].getSalePrice(product);
      return acc + salePrice;
    }
    return acc + price * quantity;
  }, 0);
};

const salasMap = {
  1: {
    title: "3 for $100",
    getSalePrice: function ({ price, quantity }) {
      return (quantity % 3) * price + ((quantity - (quantity % 3)) / 3) * 100;
    },
  },
  2: {
    title: "Second at 50%",
    getSalePrice: function ({ price, quantity }) {
      const fixedPrice = price * quantity;
      const discount = Math.floor(quantity / 2) * 0.5 * price;
      return fixedPrice - discount;
    },
  },
  3: {
    title: "Buy one get one free",
    getSalePrice: function ({ price, quantity }) {
      const fixedPrice = price * quantity;
      const discount = Math.floor(quantity / 2) * price;
      return fixedPrice - discount;
    },
  },
};

const basketService = {
  calculateTotal,
  salasMap,
};

export default basketService;
