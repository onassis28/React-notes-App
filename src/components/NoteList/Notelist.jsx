import React from 'react'
import './notelist.css'
import Note from '../Note/Note'

function Notelist({ ondelete, notes }) {
  console.log(notes)
  const renderNote = notes.map((note) => {
    return (
      <Note
        Key={note.id}
        key={note.id}
        text={note.text}
        date={note.date}
        deletion={ondelete}
        notes={notes}
      />
    )
  })

  console.log(ondelete)
  return (
    <>
      <div className="noteslist">{renderNote}</div>
    </>
  )
}

export default Notelist
