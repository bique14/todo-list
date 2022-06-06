const id = "button/SUBMIT";

export const submitValue = (action) => {
  return {
    type: id,
    payload: action,
  };
};

submitValue.id = id;
