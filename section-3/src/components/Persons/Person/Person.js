import React from 'react';

import styles from './Person.css';

const person = props => {
	console.log('[Person.js] rendering...');
	return (
		<div className={styles.Person}>
			<p onClick={props.click}>
				I am {props.name} and I am {props.age}yo!
			</p>
			<p>{props.children}</p>
			<input type="text" value={props.name} onChange={props.changed} />
		</div>
	);
};

export default person;
