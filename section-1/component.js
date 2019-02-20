class Person extends React.Component {
	render() {
		return (
			<div className="person">
				<h1>{this.props.name}</h1>
				<p>Age: {this.props.age}</p>
			</div>
		);
	}
}

const list = (
	<div>
		<Person name="Tess" age="5" />
		<Person name="Pili" age="3" />
	</div>
);

ReactDOM.render(list, document.querySelector('#list'));
