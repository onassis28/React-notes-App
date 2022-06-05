import React from 'react';
import './notelist.css';
import Note from '../Note/Note';

const Notelist = ({ notes }) => {
	console.log(notes);
	const renderNote = notes.map((note) => {
		return <Note key={note.id} text={note.text} date={note.date} />;
	});

	return (
		<>
			<div className='noteslist_container container'>{renderNote}</div>;
		</>
	);
};

export default Notelist;
