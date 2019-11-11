import React, { useState, useEffect } from 'react'
import { Table, Divider, Modal, Form, Select, Input, Button } from 'antd';
const { Option } = Select;


function HomeList(props) {
    const [rows, setData] = useState({})
    const [visible, setVisible] = useState(false)

    const columns = [
        { title: 'Name', dataIndex: 'name', render: text => <a>{text}</a>, },
        { title: 'Cash Assets', className: 'column-money', dataIndex: 'money', },
        { title: 'Address', dataIndex: 'address' },
        {
            title: '操作', render: (row) => (
                <span>
                    {/* <Divider type="vertical" /> */}
                    <a onClick={() => {
                        setData(row)
                        setVisible(true)
                        // console.log(885, row);
                    }}>Delete</a>
                </span>
            )
        },
    ];
    const data = [
        { key: '1', name: 'John Brown', money: '￥300,000.00', address: 'New York No. 1 Lake Park' },
        { key: '2', name: 'Jim Green', money: '￥1,256,000.00', address: 'London No. 1 Lake Park' },
        { key: '3', name: 'Joe Black', money: '￥120,000.00', address: 'Sidney No. 1 Lake Park' },
    ];

    const handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    const handleSelectChange = value => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    useEffect(() => {
        console.log("HomeList组件");
        return () => {
            console.log('列表卸载');
        }

    }, [])
    
    // const { getFieldDecorator } = props.form;
    console.log(98, rows);
    return (
        <div>
            <h1>HomeList组件</h1>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() => 'Header'}
            // footer={() => 'Footer'}
            />
            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={() => {
                    setVisible(false)
                }}
                onCancel={() => {
                    setVisible(false)
                }}
            >
                <p>Some contents...</p>
               
            </Modal>
        </div>
    )
}

export default HomeList
