const calculateTotal = (basketItems) => {
  return basketItems.reduce((acc, product) => {
    if (product.sales) {
      const firstSalePrice = salasMap.THREE_FOR_100$.validate(product);
      if (firstSalePrice) return acc + firstSalePrice;

      const secondSalePrice = salasMap["SECOND_AT_50%"].validate(product);
      if (secondSalePrice) return acc + secondSalePrice;

      const ThirdSalePrice = salasMap.BUY_ONE_GET_ONE_FREE.validate(product);
      if (ThirdSalePrice) return acc + ThirdSalePrice;
    }
    return acc + product.price * product.quantity;
  }, 0);
};

const salasMap = {
  THREE_FOR_100$: {
    title: "3 for 100$",
    validate: function (product) {
      if (
        product.sales.includes("THREE_FOR_100$") &&
        product.quantity >= 3 &&
        product.quantity % 3 === 0
      )
        return (product.quantity / 3) * 100;
      return 0;
    },
  },
  "SECOND_AT_50%": {
    title: "Second at 50%",
    validate: function (product) {
      if (
        product.sales.includes("SECOND_AT_50%") &&
        product.quantity >= 2 &&
        product.quantity % 2 === 0
      )
        return (product.quantity / 2) * product.price * 1.5;
      return 0;
    },
  },
  BUY_ONE_GET_ONE_FREE: {
    title: "Buy one get one free",
    validate: function (product) {
      if (
        product.sales.includes("BUY_ONE_GET_ONE_FREE") &&
        product.quantity >= 1 &&
        product.quantity % 2 === 0
      )
        return product.quantity * product.price * 0.5;
      return 0;
    },
  },
};

const basketService = {
  calculateTotal,
  salasMap,
};

export default basketService;
