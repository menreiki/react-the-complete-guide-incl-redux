import React, { useEffect, useRef, useContext } from 'react';

import AuthContext from '../../context/auth-context';
import classes from './Cockpit.module.css';

const cockpit = props => {
	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);

	// can add several useEffects
	// useEffect runs after every render cycle
	useEffect(() => {
		// executed for every render cycle incl the first one
		console.log('[Cockpit.js] useEffect');
		// http request
		// setTimeout(() => {
		// 	alert('saved data!');
		// }, 1000);
		toggleBtnRef.current.click();
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
	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button ref={toggleBtnRef} className={btnStyle} onClick={props.clicked}>
				Toggle Persons
			</button>
			{<button onClick={authContext.login}>Login</button>}
		</div>
	);
};

export default React.memo(cockpit);
