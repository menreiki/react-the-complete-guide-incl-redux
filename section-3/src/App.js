import React, { Component } from 'react';

import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	state = {
		persons: [
			{ id: 1, name: 'tess', age: 5 },
			{ id: 2, name: 'pilar', age: 3 },
			{ id: 3, name: 'bea', age: 3 },
		],
		showPersons: false,
	};

	switchNameHandler = newName => {
		this.setState({
			persons: [
				{ name: 'tess', age: 5 },
				{ name: newName, age: 1 },
				{ name: 'bea', age: 1 },
			],
		});
	};

	deletePersonHandler = index => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({ persons });
	};

	nameChangedhandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => p.id === id);

		// const person = Object.assign({}, this.state.persons[personIndex]);
		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow,
		});
	};

	render() {
		let persons = null;

		let btnStyle = '';

		console.dir(styles);

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map(({ id, name, age }, index) => (
						<ErrorBoundary key={id}>
							<Person
								name={name}
								age={age}
								click={() => this.deletePersonHandler(index)}
								changed={event => this.nameChangedhandler(event, id)}
							/>
						</ErrorBoundary>
					))}
				</div>
			);

			btnStyle = styles.Red;
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push(styles.red);
		}
		if (this.state.persons.length <= 1) {
			classes.push(styles.bold);
		}

		return (
			// wrap with StyleRoot to access features like media queries
			<div className={styles.App}>
				<h1>Hi, I'm a React App!</h1>
				<p className={classes.join(' ')}>This is really working!</p>
				<button className={btnStyle} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

//wrap export with Radium to use pseudo selectors
export default App;
