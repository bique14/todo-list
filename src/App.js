import { useState } from "react";
import { connect } from "react-redux";
import "./App.css";

import { noteActions } from "./state/note/actions";
import { uid } from "./lib/uid";
import Notes from "./Notes";

const App = (props) => {
  const { onCreateNewNote } = props;
  const [noteDetails, setNoteDetails] = useState("");

  const onEnter = (e) => {
    if (e.key === "Enter") {
      onCreateNewNote({ id: uid(), details: noteDetails });
      setNoteDetails("");
    }
  };

  return (
    <div className="App">
      <div className="App-container">
        <h1>TODO LIST</h1>
        <div className="input-container">
          <input
            value={noteDetails}
            onChange={(e) => setNoteDetails(e.target.value)}
            onKeyDown={onEnter}
          />
          <button
            onClick={() => {
              onCreateNewNote({
                id: uid(),
                details: noteDetails,
              });
              setNoteDetails("");
            }}
          >
            CREATE
          </button>
        </div>

        <Notes />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateNewNote: (note) => {
      const { id, details } = note;
      dispatch(noteActions.createNewNote({ id, details }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
