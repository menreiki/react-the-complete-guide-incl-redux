import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Person from './Person/Person';

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
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black',
			},
		};

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map(({ id, name, age }, index) => (
						<Person
							key={id}
							name={name}
							age={age}
							click={() => this.deletePersonHandler(index)}
							changed={event => this.nameChangedhandler(event, id)}
						/>
					))}
				</div>
			);

			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: 'salmon',
				color: 'black',
			};
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		return (
			// wrap with StyleRoot to access features like media queries
			<StyleRoot>
				<div className="App">
					<h1>Hi, I'm a React App!</h1>
					<p className={classes.join(' ')}>This is really working!</p>
					<button style={style} onClick={this.togglePersonsHandler}>
						Toggle Persons
					</button>
					{persons}
				</div>
			</StyleRoot>
		);
	}
}

//wrap export with Radium to use pseudo selectors
export default Radium(App);
