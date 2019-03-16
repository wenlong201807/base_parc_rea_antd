import React from 'react';

class Child extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			child: '66'
		};
	}

	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	componentWillReceiveProps(newProps) {
		console.log(newProps);
		console.log('componentWillReceiveProps');
	}
	shouldComponentUpdate() {
		console.log('shouldComponentUpdate');
		return true;
	}
	componentWillUpdate() {
		console.log('componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	render() {
		return (
			<div>
				<h2>child 父子组建练习</h2>
				<p>{this.props.name}</p>
				<p>{this.props.parent}</p>
			</div>
		);
	}
}

export default Child;
