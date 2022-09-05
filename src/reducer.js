const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  // if (action.type === 'INCREASE_AMOUNT') {
  //   return { ...state, amount: amount++ };
  // }
  // if (action.type === 'DECREASE_AMOUNT') {
  // }
  return state;
};

export default reducer;
