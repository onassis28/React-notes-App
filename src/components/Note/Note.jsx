import React from 'react';
import './note.css';
import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
	return (
		<div className='note_container'>
			<span>Hi! This is our first Note</span>
			<div className='note_footer'>
				<small>13/12/2022</small>
				<MdDeleteForever className='delete_icon' />
			</div>
		</div>
	);
};

export default Note;
