const id = "button/ON_DONE";

export const onDone = (action) => {
  return {
    type: id,
    payload: action,
  };
};

onDone.id = id;
