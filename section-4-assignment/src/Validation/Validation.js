import React from 'react';

const MAX_LENGTH = 5;

const validation = props => {
	const message = props.length >= MAX_LENGTH ? 'Text long enough.' : 'Text too short!'
	return (
		<div className="Validation">
			<p>{message}</p>
		</div>
	);
};

export default validation;
