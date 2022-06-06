export const decreaseValueReducer = (state, action) => {
  return {
    ...state,
    count: state.count - 1,
  };
};
