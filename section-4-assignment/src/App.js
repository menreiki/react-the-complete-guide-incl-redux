import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {
	state = {
		text: '',
	};

	updateText = event => {
		this.setState({ text: event.target.value });
	};

	deleteCharHandler = index => {
		const chars = this.state.text.split('').slice();
		chars.splice(index, 1);
		this.setState({ text: chars.join('') });
	};

	render() {
		let chars = null;
		if (this.state.text.length > 0) {
			chars = (
				<div>
					{this.state.text.split('').map((char, index) => (
						<Char
							key={index}
							char={char}
							click={() => this.deleteCharHandler(index)}
						/>
					))}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>Assignment</h1>
				<input
					type="text"
					placeholder="Enter your text"
					onChange={this.updateText}
					value={this.state.text}
				/>
				<Validation length={this.state.text.length} />
				{chars}
			</div>
		);
	}
}

export default App;
