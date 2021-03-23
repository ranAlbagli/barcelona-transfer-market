import productsApi from "@/utils/api/products";

export default {
  namespaced: true,
  state: {
    productItems: [],
  },
  mutations: {
    updateProductItems(state, payload) {
      state.productItems = payload;
    },
  },
  getters: {
    productItems: (state) => state.productItems,
  },
  actions: {
    getProductItems({ commit }) {
      productsApi
        .get()
        .then((products) => commit("updateProductItems", products));
    },
    updateProductsItems({ commit }, product) {
      productsApi
        .update(product)
        .then((products) => commit("updateProductItems", products));
    },
  },
};
