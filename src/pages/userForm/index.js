import React, { Component } from 'react'
import BaseForm from "../../components/common/BaseForm";

export default class Form extends Component {
    state = {
        orderInfo: {},
        orderConfirmVisble: false
    }
    params = {
        page: 1
    }
    formData = {
        layout: 'inline',//'horizontal'|'vertical'|'inline'
        formList: [
            {
                type: 'INPUT',
                label: '用户名',
                field: 'username',
                initialValue: '',
                width: 200,
                allowClear: true,
                placeholder: '请输入内容222',
                rules: [{ required: true, message: '请输入用户名!' }],
            },
            {
                type: 'SELECT',
                label: '操作类型',
                field: 'status',
                initialValue: '',
                placeholder: '请选择类型3333',
                width: 200,
                list: [
                    { value: '0', name: '全部' },
                    { value: '1', name: '未处理' },
                    { value: '2', name: '已处理' }
                ],
                rules: [{ required: true, message: '请输入用户名!' }],
            },
            {
                type: 'CHECKBOX',
                label: '操作类型',
                field: 'instrest',
                initialValue: true,
                width: 200,
            }
        ]
    }
    submitData = (params) => {
        // 接收子组件的数据
        this.params = params
        // this.requestList()
        console.log('提交参数', params);
    }
    render() {
        return (
            <div>
                <BaseForm formData={this.formData} submitData={this.submitData} />
            </div>
        )
    }
}
