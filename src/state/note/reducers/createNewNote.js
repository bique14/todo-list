export const createNewNote = (state, action) => {
  return {
    ...state,
    notes: [
      ...state.notes,
      {
        id: action.payload.id,
        details: action.payload.details,
      },
    ],
    total: state.total + 1,
  };
};
