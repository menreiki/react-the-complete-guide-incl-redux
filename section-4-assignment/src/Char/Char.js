import React from 'react';

const char = props => {
	const style = {
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		margin: '16px',
		border: '1px solid black',
	};

	return (
		<div className="Char" style={style} onClick={props.click}>
			{props.char}
		</div>
	);
};

export default char;
