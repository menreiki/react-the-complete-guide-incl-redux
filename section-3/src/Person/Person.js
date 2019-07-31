import React from 'react';

import styles from './Person.module.css';

const person = props => {
	// test error boundary
	if (Math.random() > 0.7) {
		throw new Error('Something went wrong');
	}

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
