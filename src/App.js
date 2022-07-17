import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Notelist from './components/NoteList/Notelist'
import Addnote from './components/AddNote/Addnote'

import './App.css'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '15/04/2022',
    },
    {
      id: nanoid(),
      text: 'This is my second note',
      date: '15/04/2022',
    },
    {
      id: nanoid(),
      text: 'This is my third note',
      date: '15/04/2022',
    },
  ])

  const handleClick = (id, text, date, notes) => {
    const newnotes = [...notes, { id, text, date }]
    setNotes(newnotes)
  }

  return (
    <div className="app_container">
      <div className=" noteslist_container">
        <Notelist notes={notes} Onclick={handleClick} />
        <Addnote onclick={handleClick} notes={notes} />
      </div>
    </div>
  )
}

export default App
