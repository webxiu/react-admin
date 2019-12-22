import React, { Component } from 'react'
import { Table, Card, Button, Modal, Form, Input } from "antd";
import axios from "../../axios";
import { reqRole } from '../../api';
// import Utils from "../../utils/common";

class Role extends Component {
    state = {
        roles: [],
        role: {},
        isShowAdd: false,
        page_size: 10
    }
    componentWillMount() {
        this.initColumn()
    }
    componentDidMount() {
        this.reqTableList() // 请求数据
    }
    initColumn() {
        this.columns = [
            { title: 'ID', dataIndex: 'id' },
            { title: '授权人', dataIndex: 'name', render: text => text },
            {
                title: '性别', dataIndex: 'sex', render: sex => {
                    let config = {
                        '0': '女',
                        '1': '男',
                        '3': '保密'
                    }
                    return (<span>{config[sex]}</span>)
                }
            },
            { title: '创建时间', className: 'create_date', dataIndex: 'create_date' },
            { title: '授权时间', dataIndex: 'auth_date' },
            { title: '权限', dataIndex: 'role' },
            {
                title: '操作', render: (row) => (
                    <span>
                        {/* <Divider type="vertical" /> */}
                        <Button onClick={() => {
                            this.setData(row)
                            // console.log(885, row);
                        }}>Delete</Button>
                    </span>
                )
            },
        ];
    }
    reqTableList = () => {
        reqRole({ showLoading: true }).then(res => {
            res.data.forEach(item => { item['key'] = item.id })
            this.setState({
                roles: res.data,
            })
        })
    }
    setData = (row) => {
        console.log('删除行数据', row);
    }
    onRow = (row, index) => {
        // 2.点击行
        return {
            onClick: () => {
                this.setState({ role: row })
                console.log('选中行', index, row);

            }
        }
    }
    // 添加角色
    addRole = () => {

    }

    render() {
        const { roles, role, isShowAdd, page_size } = this.state
        const { getFieldDecorator } = this.props.form;
        const title = (
            <span>
                <Button type="primary" onClick={() => this.setState({ isShowAdd: true })}>创建角色</Button>&nbsp;&nbsp;
                <Button type="primary" disabled={!role.id}>设置角色权限</Button>
            </span>
        )
        const rowSelection = {
            // type: 'checkbox',
            type: 'radio',
            selectedRowKeys: [role.id],
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`选择框: ${selectedRowKeys}`, '==selectedRows: ', selectedRows);
            }
        }
        return (
            <Card title={title}>
                <Table
                    columns={this.columns}
                    dataSource={roles}
                    bordered
                    title={() => 'Header'}
                    rowSelection={rowSelection} // 1.点击选择框
                    onRow={this.onRow}
                    pagination={{ defaultPageSize: page_size }}
                // footer={() => 'Footer'}
                />
                <Modal
                    title="添加角色"
                    visible={isShowAdd}
                    onOk={this.addRole}
                    onCancel={() => {
                        this.setState({
                            isShowAdd: false
                        })
                    }}
                >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item label="角色名称">
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入角色名称' }],
                            })(
                                <Input placeholder="请输入角色名称" />,
                            )}
                        </Form.Item>
                    </Form>

                </Modal>
            </Card>
        )
    }
}

export default Form.create()(Role)