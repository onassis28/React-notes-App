import React from 'react'
import './notelist.css'
import Note from '../Note/Note'

function Notelist({ notes, handleClick }) {
  const note = 'fuck'
  console.log(handleClick)
  const renderNote = notes.map((note) => {
    return <Note key={note.id} text={note.text} date={note.date} />
  })

  return (
    <>
      <div className="noteslist">{renderNote}</div>;
    </>
  )
}

export default Notelist
