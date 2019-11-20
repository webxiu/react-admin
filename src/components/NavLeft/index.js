import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import { Menu, Icon } from 'antd';
import MenuConfig from '../../config/menuConfig'
import './index.css';
const { SubMenu } = Menu;

export default class NavLeft extends Component {
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
                    inlineCollapsed={this.state.collapsed}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
