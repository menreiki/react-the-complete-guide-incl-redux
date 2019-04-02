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

	nameChangedhandler = event => {
		this.setState({
			persons: [
				{ name: 'tess', age: 5 },
				{ name: event.target.value, age: 1 },
				{ name: 'bea', age: 1 },
			],
		});
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow,
		});
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		};

		return (
			<div className="App">
				<h1>Hi, I'm a React App!</h1>
				<button style={style} onClick={this.togglePersonsHandler}>
					Switch name
				</button>
				{this.state.showPersons ? (
					<div>
						<Person
							name={this.state.persons[0].name}
							age={this.state.persons[0].age}
						/>
						<Person
							name={this.state.persons[1].name}
							age={this.state.persons[1].age}
							click={this.switchNameHandler.bind(this, 'pilarka')}
							changed={this.nameChangedhandler}
						>
							Hobby: gaming
						</Person>
						<Person
							name={this.state.persons[2].name}
							age={this.state.persons[2].age}
						/>
					</div>
				) : null}
			</div>
		);
	}
}

export default App;
