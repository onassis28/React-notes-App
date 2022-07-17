import React from 'react'
import './note.css'
import { MdDeleteForever } from 'react-icons/md'

function Note({ Key, text, date, deletion, notes }) {
  console.log(deletion)
  return (
    <div className="note_container">
      <span>{text}</span>

      <div className="note_footer">
        <small>{date}</small>
        <div onClick={() => deletion(Key, notes)}>
          <MdDeleteForever className="delete_icon" />
        </div>
      </div>
    </div>
  )
}

export default Note
