import React from 'react';
import './Child.less';
import './Child.css';
import './Child.scss';

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
				<h2 className="test">我有less样式——————child 父子组建练习</h2>
				<p className="test_css">我有css样式——————{this.props.name}</p>
				<p className="test_scss">我有scss样式——————{this.props.parent}</p>
			</div>
		);
	}
}

export default Child;
