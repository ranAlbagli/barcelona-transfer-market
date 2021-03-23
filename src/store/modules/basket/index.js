import basketApi from "@/utils/api/basket";
import basketService from "@/utils/basket.service";

export default {
  namespaced: true,
  state: {
    basketItems: [],
  },
  mutations: {
    updateBasketItems(state, payload) {
      state.basketItems = payload;
    },
  },
  getters: {
    basketItems({ basketItems }) {
      return basketItems;
    },

    basketTotal({ basketItems }) {
      return basketService.calculateTotal(basketItems);
    },

    basketQuantity: (state) => {
      return state.basketItems.reduce((acc, { quantity }) => {
        return quantity + acc;
      }, 0);
    },
  },

  actions: {
    getBasketItems({ commit }) {
      basketApi.get().then((basket) => commit("updateBasketItems", basket));
    },

    addToBasket({ commit }, payload) {
      basketApi
        .create(payload)
        .then((basket) => commit("updateBasketItems", basket));
    },

    removeFromBasket({ commit }, payload) {
      basketApi
        .remove(payload)
        .then((basket) => commit("updateBasketItems", basket));
    },
  },
};
