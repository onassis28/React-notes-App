import React from "react";
import "./notelist.css";
import Note from "../Note/Note";
import Addnote from "../AddNote/Addnote";

function Notelist({ notes }) {
  console.log(notes);
  const renderNote = notes.map((note) => {
    return <Note key={note.id} text={note.text} date={note.date} />;
  });

  return (
    <>
      <div className="noteslist_container ">
        {renderNote}

        <Addnote />
      </div>
      ;
    </>
  );
}

export default Notelist;
