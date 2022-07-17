import React from 'react'
import './addnote.css'
import { useState } from 'react'

function Addnote({ onclick, notes }) {
  console.log(onclick)
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
          <small>200 Remaining</small>

          <button onClick={() => onclick(5, text, 5, notes)}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Addnote
