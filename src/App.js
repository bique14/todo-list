import { useState } from "react";
import { connect } from "react-redux";
import "./App.css";

import { buttonActions } from "./state/button/actions";
import { uid } from "./lib/uid";
import Notes from "./Notes";

const App = (props) => {
  const { onSubmitNote } = props;
  const [noteDetails, setNoteDetails] = useState("");

  const onEnter = (e) => {
    if (e.key === "Enter" && noteDetails) {
      onSubmitNote({ id: uid(), details: noteDetails });
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
            disabled={noteDetails.length === 0}
            onClick={() => {
              onSubmitNote({
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
    onSubmitNote: (note) => {
      const { id, details } = note;
      dispatch(buttonActions.submitValue({ id, details }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
