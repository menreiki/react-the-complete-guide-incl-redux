import React, { Component, Fragment } from 'react';
import styles from './Person.css';

class Person extends Component {
	render() {
		console.log('[Person.js] rendering...');
		return (
			<Fragment>
				<p onClick={this.props.click}>
					I am {this.props.name} and I am {this.props.age}yo!
				</p>
				<p>{this.props.children}</p>
				<input
					type="text"
					value={this.props.name}
					onChange={this.props.changed}
				/>
			</Fragment>
		);
	}
}

export default Person;
