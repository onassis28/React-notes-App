import React from 'react';
import './note.css';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ Key, text, date }) => {
	return (
		<div className='note_container'>
			<span>{text}</span>
			<div className='note_footer'>
				<small>{date}</small>
				<MdDeleteForever className='delete_icon' />
			</div>
		</div>
	);
};

export default Note;
