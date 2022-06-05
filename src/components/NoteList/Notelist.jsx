import React from 'react';
import './notelist.css';
import Note from '../Note/Note';

const Notelist = () => {
	return (
		<div className='noteslist_container container'>
			<Note />
			<Note />
			<Note />
			<Note />
		</div>
	);
};

export default Notelist;
