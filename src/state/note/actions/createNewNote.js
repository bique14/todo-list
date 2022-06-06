const id = "note/CREATE_NEW_NOTE";

export const createNewNote = (action) => {
  return {
    type: id,
    payload: action,
  };
};

createNewNote.id = createNewNote;
