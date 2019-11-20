import React, { Component } from 'react'
import { Icon } from "antd";
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
        formConfig: {
            layout: 'inline',//'horizontal'|'vertical'|'inline', inline会默认添加冒号
            hideRequiredMark: true,//是否隐藏*号
            labelAlign: 'left',//'left' | 'right'
            colon: false, // 添加标题的冒号,只有在horizontal下生效
        },
        formList: [
            {// 输入框
                type: 'INPUT',
                label: '用户名',
                field: 'username',
                initialValue: '默认值哦~~~',
                width: 200,
                allowClear: true,
                placeholder: '请输入内容222',
                rules: [{ required: true, message: '请输入用户名!' }],
            },
            {// 下拉框
                type: 'SELECT',
                label: '操作类型',
                field: 'status',
                initialValue: 3,
                placeholder: '请选择类型3333',
                width: 200,
                list: [
                    { value: 0, name: '全部' },
                    { value: 1, name: '未处理' },
                    { value: 2, name: '已处理' },
                    { value: 3, name: '已成功' }
                ],
                rules: [{ required: true, message: '请输入用户名!' }],
            },
            {// 多选框
                type: 'CHECKBOX',
                label: '操作类型',
                field: 'instrest',
                initialValue: ['0', '2'],
                width: 200,
                list: [
                    { value: '0', name: '唱歌' },
                    { value: '1', name: '跳舞' },
                    { value: '2', name: '爬山' }
                ],
                rules: [{ required: true, message: '请选择兴趣' }]
            },
            {// 单选框
                type: 'RADIO',
                label: '性别',
                field: 'sex',
                initialValue: 1,
                // initialValue: '',
                width: 200,
                list: [
                    { value: 0, name: '男' },
                    { value: 1, name: '女' },
                    { value: 2, name: '保密' }
                ],
                rules: [{ required: true, message: '请选择性别!' }]
            },
            {// 开关
                type: 'SWITCH',
                label: '是否启用',
                field: 'switch',
                initialValue: true,
                checkedChildren: '开启',
                unCheckedChildren: '关闭',
                // unCheckedChildren: <Icon type="close" />,
                width: 200,
            },
            {// 日期框
                type: 'RANGEPICKER',
                label: '查询日期',
                field: 'date',
                width: 260,
                placeholder: ['开始时间', '时间结束'],
                dateFormat: 'YYYY/MM/DD',
                initialValue: ['2019-11-19', '2019-11-20'],
                rules: [{ type: 'array', required: true, message: '请选择时间' }],
            },
            {// 文本框
                type: 'TEXTAREA',
                label: '发布文章',
                field: 'content',
                allowClear: true,
                initialValue: '我是默认值...',
                width: 280,
                placeholder: '请输入内容96',
                autoSize: { minRows: 2, maxRows: 26 },
                rules: [{ required: true, message: '请输入文章' }],
            },
            {
                // 点击上传
                type: 'UPLOAD',
                label: '点击上传文件',
                multiple: true,
                field: 'upload',// 发到后台的参数名
                extra: '详情说明信息...',
                uploadTitle: '点击上传',
                action: '/upload/img',
                accept: '.jpg,.png,.gif.doc.exe',//.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document
                listType: 'picture',//列表的内建样式 text, picture picture-card
                width: 280,
                rules: [{ required: false, message: '请选择文件...' }],
            },
            {
                // 拖动 + 点击上传
                type: 'DRAGGER',
                label: '点击拖拽上传文件',
                multiple: true,
                field: 'dragger',// 发到后台的参数名
                extra: '支持单个或批量上传。',
                uploadTitle: '点击 或 拖拽文件到此处上传',
                action: '/upload/img',
                accept: '.jpg,.png,.gif.doc.exe',//.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document
                listType: 'picture',//列表的内建样式 text, picture picture-card
                width: 280,
                rules: [{ required: false, message: '请选择文件...' }],
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
