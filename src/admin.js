import React, { Component } from 'react';
import Button from 'antd/lib/button';
import { Row, Col } from 'antd';
import './admin.less';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import NavLeft from './components/NavLeft/index';

class Admin extends Component {
	render() {
		return (
			<div>
				<Row>
					<Col className="nav" span={3}>
						<NavLeft />
					</Col>
					<Col className="main" span={21}>
						<Header />
						<div className="content">
							<h3>我是Admin页面组件</h3>
							<Button type="primary">Button</Button>
						</div>
						<Footer />
					</Col>
				</Row>
			</div>
		);
	}
}

export default Admin;
