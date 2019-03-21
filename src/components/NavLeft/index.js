import React, { Component } from 'react';
import './index.less';
import MenuConfig from '../../config/menuConfig';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
function handleClick(e) {
	console.log('click', e);
}
class NavLeft extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuTreeNode: [],
			mode: 'vertical'
		};
	}
	componentWillMount() {
		const menuTreeNode = this.renderMenu(MenuConfig);
		console.log(menuTreeNode);
		this.setState({
			menuTreeNode: menuTreeNode
		});
	}
	// 菜单点击时间
	// handleClick = (e) => {
	// 	console.log('菜单点击时间', e);
	// };

	// 菜单渲染
	renderMenu = (data) => {
		return data.map((item) => {
			console.log(item);
			if (item.children) {
				console.log(item.children);
				const ceshi = (
					<SubMenu
						key="sub2"
						title={
							<span>
								<Icon type="appstore" />
								<span>Navigation Two</span>
							</span>
						}>
						{this.renderMenu(item.children)}
					</SubMenu>
				);

				return ceshi;
			}
			return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
		});
	};

	render() {
		return (
			<div className="NavLeft">
				<div className="logo">
					{/* <img src="/resource/assets/antd_logo.png" alt="没有图片时" /> */}
					<a href="/">
						<img src="/assets/antd_logo.png" alt="没有图片时" title="朱文龙" className="logo_img" />
					</a>
					<h1 className="logo_h1">NavLeft</h1>
				</div>
				<Menu onClick={handleClick} theme="dark" mode="vertical">
					{this.state.menuTreeNode}
				</Menu>, mountNode
			</div>
		);
	}
}

export default NavLeft;
