import productsApi from "@/utils/api/products";

export default {
  namespaced: true,
  state: {
    productItems: [],
  },
  mutations: {
    UPDATE_PRODUCT_ITEMS(state, payload) {
      state.productItems = payload;
    },
  },
  getters: {
    productItems: (state) => state.productItems,
  },
  actions: {
    getProductItems({ commit }) {
      productsApi
        .list()
        .then((products) => commit("UPDATE_PRODUCT_ITEMS", products));
    },
    updateProductsItems({ commit }, product) {
      productsApi
        .update(product)
        .then((products) => commit("UPDATE_PRODUCT_ITEMS", products));
    },
  },
};
