import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'tess', age: 5 },
			{ name: 'pilar', age: 3 },
			{ name: 'bea', age: 3 },
		],
	};

	switchNameHandler = () => {
		this.setState({
			persons: [
				{ name: 'tess', age: 5 },
				{ name: 'pilarito', age: 1 },
				{ name: 'bea', age: 1 },
			],
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Hi, I'm a React App!</h1>
				<button onClick={this.switchNameHandler}>Switch name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
				/>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
	}
}

export default App;
