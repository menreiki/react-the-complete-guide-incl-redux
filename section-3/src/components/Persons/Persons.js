import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps');
	// 	return state;
	// }

	// deprecated
	// componentWillReceiveProps(props) {
	// 	console.log('[Persons.js] componentWillReceiveProps', props);
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { message: 'snapshot' };
	}

	// deprecated
	// componentWillUpdate() {}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot);
	}

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map(({ id, name, age }, index) => (
			<Person
				key={id}
				name={name}
				age={age}
				click={() => this.props.clicked(index)}
				changed={event => this.props.changed(event, id)}
			/>
		));
	}
}

export default Persons;
