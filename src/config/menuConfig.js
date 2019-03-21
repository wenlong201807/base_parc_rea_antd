const menuList = [
	{
		title: '首页',
		key: '/admin/home'
	},
	{
		title: 'UI',
		key: '/admin/UI',
		children: [
			{
				title: '按钮',
				key: '/admin/ui/buttons'
			},
			{
				title: '弹框',
				key: '/admin/ui/modals'
			}
		]
	},
	{
		title: '权限设置',
		key: '/admin/permission'
	}
];

export default menuList;
