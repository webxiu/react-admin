import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";

import { Menu, Icon } from 'antd';
import MenuConfig from '../../config/menuConfig'
import './index.less';
const { SubMenu } = Menu;

class NavLeft extends Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode,
            collapsed: false,
        })
    }
    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                let path = this.props.location.pathname;
                const cItem = item.children.find(cItem => cItem.key === path)
                if (cItem) {
                    this.openKey = item.key// 把openKey存在this种
                }
                return (
                    <SubMenu key={item.key} title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    }>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }

            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>
                    <Icon type={item.icon} />
                    <span> {item.title}</span>
                </NavLink>
            </Menu.Item>
        })
    }


    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        let path = this.props.location.pathname;
        let openKey = this.openKey
        return (
            <div className="left-slide">
                <div className="logo">
                    <img src="/assets/logo.svg" alt="" />
                    <h1>Admin System</h1>
                </div>
                <Menu
                    // defaultSelectedKeys={['/admin/setting/card']}
                    // defaultOpenKeys={['/admin/setting']}
                    mode="inline"
                    theme="dark"
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    // inlineCollapsed={this.state.collapsed}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default withRouter(NavLeft)