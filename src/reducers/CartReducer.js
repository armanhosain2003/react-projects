export const initialState = {
  cartData: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      return {
        cartData: [...state.cartData, action.payload],
      };
    case "RemoveFromCart":
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.id !== action.payload),
      };
    default: {
      throw new Error(`No matched ${action.type}`);
    }
  }
};
