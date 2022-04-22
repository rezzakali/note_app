import React from "react";

export default function NoteList({ newNote, noteDelete, id }) {
  return (
    <div className="d-inline-flex">
      <div className="card-group m-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{newNote.title}</h5>
            <p className="card-text">{newNote.description}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                noteDelete(id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
