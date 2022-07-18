import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Notelist from './components/NoteList/Notelist'
import Addnote from './components/AddNote/Addnote'

import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  const handleClick = (id, text, date, notes) => {
    const newnotes = [...notes, { id, text, date }]
    setNotes(newnotes)
  }

  const handleDelete = (id, notes) => {
    const newnotes = notes.filter((note) => note.id !== id)
    setNotes(newnotes)
  }

  return (
    <div className="app_container">
      <div className={notes.length === 0 ? 'noteblock' : null}>
        <Notelist notes={notes} ondelete={handleDelete} />
      </div>
      <Addnote onclick={handleClick} notes={notes} />
    </div>
  )
}

export default App
