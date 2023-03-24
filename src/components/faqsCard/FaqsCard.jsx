import React, { useState } from 'react';
import '../../App.css'

function FaqsCard({ title, text }) {

	const [modal, setModal] = useState(false)
	return (
		<div>
			{/*<div>
				{title}
				<button onClick={() => setModal(!modal)}>
					+
				</button>
			</div>
			<div className={`modal modal-${modal}`}>
				{text}
			</div>*/}
		</div>
	)
}

export default FaqsCard;
