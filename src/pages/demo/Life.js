import React from 'react';
import Child from './Child';

class Life extends React.Component {
	constructor(props) {
		// 一般在子组件中的书写方式
		super(props);
		this.state = {
			count: 1,
			parent: '我是父组件life里面的内容'
		};
	}

	// state = {   // 一般在父组件中书写方式
	//   count :0
	// }
	handleAdd = () => {
		// 没有绑定bind(this) 则需要使用箭头函数的写法  还是必须是有名函数
		console.log('handleAdd');
		this.setState({
			count: this.state.count + 1
		});
	};

	handleClick() {
		console.log('handleClick----bind(this)');
		this.setState({
			count: this.state.count - 1
		});
	}

	render() {
		return (
			<div>
				<div style={{ color: 'red' }}>
					<h2>生命周期的介绍</h2>
					<button onClick={this.handleClick.bind(this)}>handleClick.bind(this)点击一下</button>
					<button onClick={this.handleAdd}>handleAdd点击一下</button>
					<p>{this.state.count}</p>
				</div>
				<hr />
				<Child name={this.state.count} parent={this.state.parent} />
			</div>
		);
	}
}

export default Life;
