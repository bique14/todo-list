const id = "note/DONE_NOTE";

export const doneNote = (action) => {
  return {
    type: id,
    payload: action,
  };
};

doneNote.id = id;
