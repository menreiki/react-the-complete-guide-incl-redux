import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import classes from './App.module.css';

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
		showCockpit: true,
		changeCounter: 0,
		authenticated: false,
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	// deprecated
	// componentWillMount() {
	// 	console.log('[App.js] componentWillMount');
	// }

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
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

		this.setState((prevState, props) => {
			return { persons, changeCounter: prevState.changeCounter + 1 };
		});
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow,
		});
	};

	loginHandler = () => {
		this.setState({ authenticated: true });
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
					isAuthenticated={this.state.authenticated}
				/>
			);
		}

		return (
			// wrap with StyleRoot to access features like media queries
			<Aux classes={classes.App}>
				<button onClick={() => this.setState({ showCockpit: false })}>
					Remove Cockpit
				</button>
				{this.state.showCockpit ? (
					<Cockpit
						title={this.props.appTitle}
						personsLength={this.state.persons.length}
						showPersons={this.state.showPersons}
						clicked={this.togglePersonsHandler}
						login={this.loginHandler}
					/>
				) : null}
				{persons}
			</Aux>
		);
	}
}

//wrap export with Radium to use pseudo selectors
export default withClass(App, classes.App);
