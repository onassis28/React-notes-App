import React from 'react'
import './addnote.css'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function Addnote({ onclick, notes }) {
  const date = new Date().toLocaleDateString()
  const id = nanoid()
  console.log(id)

  const [text, setText] = useState('')
  return (
    <div>
      <div className="addnote_container">
        <div>
          <textarea
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your notes here"
            rows="8"
            cols="25"
          />
        </div>

        <div className="addnote_footer">
          <button onClick={() => onclick(id, text, date, notes)}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Addnote
