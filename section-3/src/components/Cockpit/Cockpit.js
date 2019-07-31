import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const cockpit = props => {
	// can add several useEffects
	useEffect(() => {
		// executed for every render cycle incl the first one
		console.log('[Cockpit.js] useEffect');
		// http request
		setTimeout(() => {
			alert('saved data!');
		}, 1000);
		return () => {
			console.log('[Cockpit.js] Cleanup work in useEffect');
		};
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
		};
	});

	let btnStyle = '';
	if (props.showPersons) {
		btnStyle = classes.Red;
	}

	const assignedClasses = [];
	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button className={btnStyle} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default cockpit;
