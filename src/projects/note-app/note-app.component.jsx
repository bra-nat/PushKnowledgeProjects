import Note from "../components/note/note";
import Button from "../components/button/button.component";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    const newNotes = [...notes, newNote];
    newNotes.filter((note) => !note.id && (note.id = uuidv4()));
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const cards = [
    "bg-info",
    "bg-danger",
    "bg-primary",
    "bg-success",
    "bg-warning",
  ];

  const randomizeBg = () => {
    const random = Math.floor(Math.random() * cards.length);
    return cards[random];
  };

  return (
    <div className="container">
      <Button
        btnClass={"btn btn-success m-2"}
        text={"+ New Note"}
        onClick={addNewNote}
      />
      <div
        className="container container-sm d-flex"
        style={{ gap: 25, flexWrap: "wrap" }}>
        {notes.map((note) => (
          <Note key={note.id} note={note} onClick={deleteNote} cardBg={randomizeBg}/>
        ))}
      </div>
    </div>
  );
};

export default NoteApp;
