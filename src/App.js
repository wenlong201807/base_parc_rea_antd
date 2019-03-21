import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Child from './pages/demo/Child';
// import Life from './pages/demo/Life';
import Admin from './admin';

class App extends Component {
	render() {
		return (
			<div>
				<Admin />
				{/* <Life /> */}
				{/* <Child /> */}
			</div>
		);
	}
}

export default App;
