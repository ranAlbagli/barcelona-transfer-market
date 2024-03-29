import basketApi from "@/utils/api/basket";
import basketService from "@/utils/basket.service";

export default {
  namespaced: true,
  state: {
    basketItems: [],
  },
  mutations: {
    UPDATE_BASKET_ITEMS(state, payload) {
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

    basketTotalFixedPrice({ basketItems }) {
      return basketItems.reduce((acc, { quantity, price }) => {
        return quantity * price + acc;
      }, 0);
    },

    basketQuantity: (state) => {
      return state.basketItems.reduce((acc, { quantity }) => {
        return quantity + acc;
      }, 0);
    },
  },

  actions: {
    getBasketItems({ commit }) {
      basketApi.list().then((basket) => commit("UPDATE_BASKET_ITEMS", basket));
    },

    addToBasket({ commit }, payload) {
      basketApi
        .create(payload)
        .then((basket) => commit("UPDATE_BASKET_ITEMS", basket));
    },

    removeFromBasket({ commit }, payload) {
      basketApi
        .remove(payload)
        .then((basket) => commit("UPDATE_BASKET_ITEMS", basket));
    },
  },
};
