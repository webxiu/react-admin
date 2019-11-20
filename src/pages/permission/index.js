import React, { Component } from 'react'
import { Tree,Button } from "antd";
import menuConfig from "../../config/menuConfig";
const { TreeNode } = Tree;
export default class Permission extends Component {
    state = {
        // 请求获取到的权限 与 提交权限数据
        checkedKeys: [
            "/admin/setting",
            "/admin/setting/add",
            "/admin/setting/card",
            "/admin/form"
        ]
    }
    // 遍历树节点方法
    getTreeNodes = (trees) => {
        return trees.map((item) => {
            if (item.children) {
                return <TreeNode title={item.title} key={item.key}>
                    {this.getTreeNodes(item.children)}
                </TreeNode>
            } {

                return <TreeNode {...item} />
            }
        })
    }
    // 选择权限
    onCheck = (checkedKeys) => {
        console.log('选中权限', checkedKeys);
        this.setState({ checkedKeys });
    }
    // 提交权限
    submitTrees = () => {
        console.log('提交权限', this.state.checkedKeys);
    }
    render() {
        return (
            <div>
                <h3>权限管理列表:</h3>
                <Tree
                    checkable
                    defaultExpandAll
                    onCheck={(checkKeys) => {
                        this.onCheck(checkKeys)
                    }}
                    checkedKeys={this.state.checkedKeys}
                >
                    <TreeNode title="平台节点" key="one">
                        {this.getTreeNodes(menuConfig)}
                    </TreeNode>
                </Tree>
                <div>
                    <Button onClick={this.submitTrees}>提交权限</Button>
                </div>
            </div>
        )
    }
}
