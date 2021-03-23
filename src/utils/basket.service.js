// const salasMap = {
//   1: "3 for 100$",
//   2: "second at 50%",
//   3: "buy 1 get one free"
//  };

// const calculateTotal = (basketItems) => {
//   return basketItems.reduce((acc, product) => {
//     if (product.sales && product.sales.includes(1) && product.quantity >= 3) {
//       if (product.quantity % 3 === 0) {
//         return acc + (product.quantity / 3) * 100;
//       }
//     }
//     if (product.sales && product.sales.includes(3) && product.quantity >= 1) {
//       if (product.quantity % 2 === 0) {
//         return acc + (product.quantity * product.price * 0.5);
//       }
//     }
//     return acc + product.price * product.quantity;
//   }, 0);
// };

const calculateTotal = (basketItems) => {
  return basketItems.reduce((acc, product) => {
    if (product.sales) {
      if (
        product.sales.includes(1) &&
        product.quantity >= 3 &&
        product.quantity % 3 === 0
      ) {
        return acc + (product.quantity / 3) * 100;
      }
      if (
        product.sales.includes(3) &&
        product.quantity >= 1 &&
        product.quantity % 2 === 0
      ) {
        return acc + product.quantity * product.price * 0.5;
      }
      if (
        product.sales.includes(2) &&
        product.quantity >= 2 &&
        product.quantity % 2 === 0
      ) {
        return acc + (product.quantity / 2) * 0.5;
      }
    }
    return acc + product.price * product.quantity;
  }, 0);
};

const basketService = {
  calculateTotal,
};

export default basketService;
