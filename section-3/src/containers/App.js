import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ id: 1, name: 'tess', age: 5 },
			{ id: 2, name: 'pilar', age: 3 },
			{ id: 3, name: 'bea', age: 3 },
		],
		showPersons: false,
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentWillMount() {
		console.log('[App.js] componentWillMount');
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

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
		console.log('[App.js] render');
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedhandler}
				/>
			);
		}

		return (
			// wrap with StyleRoot to access features like media queries
			<div className={classes.App}>
				<Cockpit
					title={this.props.appTitle}
					persons={this.state.persons}
					showPersons={this.state.showPersons}
					clicked={this.togglePersonsHandler}
				/>
				{persons}
			</div>
		);
	}
}

//wrap export with Radium to use pseudo selectors
export default App;
