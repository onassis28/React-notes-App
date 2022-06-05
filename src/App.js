import React from 'react'
import Notelist from './components/NoteList/Notelist'
import { useState } from 'react';
import {nanoid} from 'nanoid'

import './App.css'
const App = () => {
  const[notes,setNotes]=useState([
		{
		id:nanoid(),
		text: 'This is my first note',
		date: '15/04/2022'
	},
	{
		id:nanoid(),
		text: 'This is my second note',
		date: '15/04/2022'
	},
	{
		id:nanoid(),
		text: 'This is my third note',
		date: '15/04/2022'
	}

])

  return (
    <div className='app_container'><Notelist notes= {notes}/>
   
    </div>
  )
}

export default App