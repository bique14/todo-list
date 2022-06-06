import { connect } from "react-redux";
import "./Notes.css";
import { noteActions } from "./state/note/actions";

const Notes = (props) => {
  const { notes, total, done, onDoneNote } = props;

  return (
    <div className="notes-container">
      <div className="note-count">
        <span>remaining : {notes.length}</span>
        <span>
          done : {done}/{total}
        </span>
      </div>
      {notes.map((note) => {
        return (
          <div key={note.id} className="note-item">
            <span>{note.details}</span>
            <button onClick={() => onDoneNote(note.id)} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.note.notes,
    total: state.note.total,
    done: state.note.done,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDoneNote: (id) => {
      dispatch(noteActions.doneNote({ id }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
