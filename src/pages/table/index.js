import React, { Component } from 'react'
import { Table, Button } from "antd";
import axios from "../../axios";
// import Utils from "../../utils/common";

export default class TableList extends Component {
    state = {
        page: 1
    }
    componentDidMount() {
        // const data = [
        //     { id: '1', name: '王小虎', sex: 1, money: '￥300,000.00', address: 'New York No. 1 Lake Park' },
        //     { id: '2', name: '邹芳芳', sex: 0, money: '￥1,256,000.00', address: 'London No. 1 Lake Park' },
        //     { id: '3', name: '刘德华', sex: 3, money: '￥120,000.00', address: 'Sidney No. 1 Lake Park' },
        // ];
        // data.forEach(item => { item['key'] = item.id })
        // this.setState({
        //     dataSource: data
        // })
        // 请求数据
        this.reqTableList()
    }
    setData = (row) => {
        console.log('删除行数据', row);
    }
    reqTableList = () => {
        // let _this = this
        // axios.ajax({
        //     url: '/admin/table',
        //     method: 'get',
        //     params: { params: { page: _this.params.page, page_size: 10 }, showLoading: true },
        // }).then(res => {
        //     console.log(res);
        //     this.setState({
        //         data: res.data,
        //         pagination: Utils.pagination(res, (current) => {
        //             console.log(current);
        //             _this.params.page = current
        //             this.reqTableList()

        //         })
        //     })

        // })
        axios.ajax({
            url: 'api/user.php',
            method: 'get',
            params: {
                // params: { page: _this.params.page, page_size: 10 },
                showLoading: true
            },
        }).then(res => {
            console.log(777, res);
            res.data.forEach(item => { item['key'] = item.w_id })
            this.setState({
                dataSource: res.data,
            })
        })
    }
    onRowClick = (row, index) => {
        let selectIndex = [index]
        this.setState({
            selectedRowKeys: selectIndex,
            selectItem: row
        })
    }

    render() {
        // const { selectedRowKeys } = this.state
        const rowSelection = {
            type: 'checkbox',
            // selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {

                console.log(`选择框: ${selectedRowKeys}`, '==selectedRows: ', selectedRows);
            }
        }

        const columns = [
            { title: 'ID', dataIndex: 'w_id' },
            { title: '姓名', dataIndex: 'w_username', render: text => text },
            {
                title: '性别', dataIndex: 'w_update_status', render: sex => {
                    let config = {
                        '0': '女',
                        '1': '男',
                        '3': '保密'
                    }
                    return (<span>{config[sex]}</span>)
                }
            },
            { title: '手机', className: 'w_phone', dataIndex: 'w_phone' },
            { title: '地址', dataIndex: 'w_address' },
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
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={this.state.dataSource}
                    bordered
                    title={() => 'Header'}
                    // 1.点击选择框
                    rowSelection={rowSelection}
                    onRow={(row, index) => {
                        // 2.点击行
                        return {
                            onClick: () => {
                                this.onRowClick(row, index)
                                console.log('选中行', index, row);

                            }
                        }
                    }}
                    // pagination={true}
                    pagination={this.state.pagination}
                // footer={() => 'Footer'}
                />
            </div>
        )
    }
}
