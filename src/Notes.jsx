import React, { useState } from "react";
import "./App.css";
import NoteList from "./NoteList";

export default function Notes() {
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });
  const [mainNotes, setMainNotes] = useState([]);

  const generateMainNote = (e) => {
    e.preventDefault();
    const { title, description } = notes;
    if (title && description) {
      setMainNotes((prevData) => {
        return [...prevData, notes];
      });
    } else {
      alert("filled the blank data");
    }
    setNotes({
      title: "",
      description: "",
    });
  };

  let name, value;
  const onChangeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setNotes({ ...notes, [name]: value });
  };

  const deleteNote = (id) => {
    const oldNotes = [...mainNotes];
    const noteAfterDeleted = oldNotes.filter((element, i) => {
      return i !== id;
    });
    setMainNotes(noteAfterDeleted);
  };
  return (
    <div>
      <h1 className="text-center m-3">React Note App</h1>
      <div className="shadow-lg w-50 p-3 rounded" style={{ margin: "auto" }}>
        <div className="row">
          <form>
            <div className="col-sm-12">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  required
                  aria-describedby="helpId"
                  placeholder="title"
                  value={notes.title}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  rows="3"
                  required
                  placeholder="description"
                  value={notes.description}
                  onChange={onChangeHandler}
                />
              </div>
              <button className="btn btn-success" onClick={generateMainNote}>
                Note Now
              </button>
            </div>
          </form>
        </div>
      </div>
      {mainNotes.map((newNote, index) => {
        return (
          <NoteList
            newNote={newNote}
            key={index}
            id={index}
            noteDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}
