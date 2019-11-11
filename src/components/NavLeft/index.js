import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import MenuConfig from '../../config/menuConfig'
import './index.css';
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={
                        <span>
                            <Icon type="mail" />
                            <span>{item.title}</span>
                        </span>
                    } >
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    handleClick = () => {

    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.svg" alt="" />
                    <h1>Admin System</h1>
                </div>
                <Menu onClick={this.handleClick} mode="vertical" theme="dark">
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}
