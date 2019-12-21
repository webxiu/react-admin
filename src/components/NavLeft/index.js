import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';

import { setHeadTitle } from '../../redux/actions';
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
        let path = this.props.location.pathname;
        return data.reduce((pre, item) => {
            if (item.children) {
                const cItem = item.children.find(cItem => cItem.key === path)
                if (cItem) {
                    this.openKey = item.key// 把openKey存在this种
                }
                pre.push((
                    <SubMenu key={item.key} title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    }>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                ))
            }
            // 判断item是否是当前对应的item
            // if (item.key === path || path.indexOf(item.key) ===0) { //存在二季子路由判断
            if (item.key === path ) {
                // 更新redux种的headTitle标题
                this.props.setHeadTitle(item.title)
            }
            pre.push((<Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key} onClick={() => this.props.setHeadTitle(item.title)} >
                    <Icon type={item.icon} />
                    <span> {item.title}</span>
                </NavLink>
                {/* <Link to={item.key} >
                    <Icon type={item.icon} />
                    <span> {item.title}</span>
                </Link> */}
            </Menu.Item>))
            return pre
        }, [])
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

export default connect(
    state => ({}), // 第一个参数穿属性
    { setHeadTitle } // 第二个参数传方法
)(withRouter(NavLeft))