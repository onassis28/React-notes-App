import React from 'react';
import './addnote.css';

const Addnote = () => {
	return (
		<>
			<div className='addnote_container'>
				<textarea
					placeholder='Type your notes here'
					rows='8'
					cols='10'></textarea>
			</div>
			<div className='addnote_footer'></div>
		</>
	);
};

export default Addnote;
