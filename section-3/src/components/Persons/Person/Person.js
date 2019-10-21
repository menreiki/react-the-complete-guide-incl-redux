import React, { Component } from 'react';

import styles from './Person.css';

class Person extends Component {
	render() {
		console.log('[Person.js] rendering...');
		return [
			<p key="i1" onClick={this.props.click}>
				I am {this.props.name} and I am {this.props.age}yo!
			</p>,
			<p key="i2">{this.props.children}</p>,
			<input
				key="i3"
				type="text"
				value={this.props.name}
				onChange={this.props.changed}
			/>,
		];
	}
}

export default Person;
