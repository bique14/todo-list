export const increaseValueReducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  };
};
