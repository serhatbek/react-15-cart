const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  // if (action.type === 'INCREASE_AMOUNT') {
  //   return { ...state, amount: amount++ };
  // }
  // if (action.type === 'DECREASE_AMOUNT') {
  // }
  return state;
};

export default reducer;
