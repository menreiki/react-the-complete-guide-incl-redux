import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
	const [personsState, setPersonsState] = useState({
		persons: [
			{ name: 'tess', age: 5 },
			{ name: 'pilar', age: 3 },
			{ name: 'bea', age: 3 },
		],
	});

	const switchNameHandler = () => {
		setPersonsState({
			persons: [
				{ name: 'tess', age: 5 },
				{ name: 'pilarito', age: 1 },
				{ name: 'bea', age: 1 },
			],
		});
	};

	return (
		<div className="App">
			<h1>Hi, I'm a React App!</h1>
			<button onClick={switchNameHandler}>Switch name</button>
			<Person
				name={personsState.persons[0].name}
				age={personsState.persons[0].age}
			/>
			<Person
				name={personsState.persons[1].name}
				age={personsState.persons[1].age}
			/>
			<Person
				name={personsState.persons[2].name}
				age={personsState.persons[2].age}
			/>
		</div>
	);
};

export default app;
