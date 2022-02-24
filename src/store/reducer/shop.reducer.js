export const BasketState = {
  status: false,
};

export const ShopBasketReducer = (state = BasketState, action) => {
  switch (action.type) {
    case "cardBasketState":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
