import React from 'react';
import './addnote.css';

function Addnote() {
	return (
		<div className='addnote_container'>
			<div>
				<textarea placeholder='Type your notes here' rows='8' cols='25' />
			</div>

			<div className='addnote_footer'>
				<small>200 Remaining</small>

				<button>Save</button>
			</div>
		</div>
	);
}

export default Addnote;
