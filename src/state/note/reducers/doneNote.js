export const doneNote = (state, action) => {
  return {
    ...state,
    notes: state.notes.filter((x) => x.id !== action.payload.id),
    done: state.done + 1,
  };
};
