import React, { Component } from 'react'
import { Icon } from "antd";
import BaseForm from "../../components/common/BaseForm";
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default class Form extends Component {
    state = {
        orderInfo: {},
        orderConfirmVisble: false
    }
    params = {
        page: 1
    }
    // 上传回调
    normFile = e => {
        console.log('上传事件:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    formData = {
        formConfig: {
            layout: 'vertical',//'horizontal'|'vertical'|'inline', inline会默认添加冒号
            hideRequiredMark: true,//是否隐藏*号
            labelAlign: 'left',//'left' | 'right'
            colon: false, // 添加标题的冒号,只有在horizontal下生效
        },
        formList: [
            {// 输入框
                type: 'INPUT',
                field: 'username',
                itemConfig: {
                    label: '用户名5',
                    key: 'username',
                },
                fieldCheck: {
                    initialValue: '',
                    rules: [{ required: true, message: '请输入用户名!' }],
                },
                propsConfig: {
                    type: 'text',
                    style: { width: 200 },
                    allowClear: true,
                    placeholder: '请输入内容333',
                }
            },
            {// 下拉框
                type: 'SELECT',
                field: 'status',
                itemConfig: {
                    label: '操作类型',
                    key: 'status',
                },
                fieldCheck: {
                    initialValue: 3,
                    rules: [{ required: true, message: '请输入用户名!' }],
                },
                propsConfig: {
                    placeholder: '请选择类型3333',
                    style: { width: 200 },
                },
                list: [
                    { value: 0, name: '全部' },
                    { value: 1, name: '未处理' },
                    { value: 2, name: '已处理' },
                    { value: 3, name: '已成功' }
                ]

            },
            {// 多选框
                type: 'CHECKBOX',
                field: 'instrest',
                itemConfig: {
                    label: '兴趣爱好',
                    key: 'instrest',
                },
                fieldCheck: {
                    valuePropName: 'checked',
                    // initialValue: ['0', '2'],
                    initialValue: [],
                    rules: [{ required: true, message: '请选择兴趣' }]
                },
                propsConfig: {
                    style: { width: 280 },
                },
                list: [
                    { value: '0', name: '唱歌5' },
                    { value: '1', name: '跳舞' },
                    { value: '2', name: '爬山' }
                ],
            },
            {// 单选框
                type: 'RADIO',
                field: 'sex',
                itemConfig: {
                    label: '性别',
                    key: 'sex',
                },
                fieldCheck: {
                    valuePropName: 'checked',
                    initialValue: '',
                    // initialValue: 1,
                    rules: [{ required: true, message: '请选择性别' }]
                },
                propsConfig: {
                    style: { width: 230 },
                },
                list: [
                    { value: 0, name: '男' },
                    { value: 1, name: '女' },
                    { value: 2, name: '保密' }
                ],
            },
            {// 开关
                type: 'SWITCH',
                field: 'switch',
                itemConfig: {
                    label: '是否启用',
                    key: 'switch',
                },
                fieldCheck: {
                    valuePropName: 'checked',
                    initialValue: true,
                },
                propsConfig: {
                    // style: { width: '' },
                    checkedChildren: '开启',
                    unCheckedChildren: '关闭',
                    prefix: <Icon type="close" />,
                }
            },
            {// 日期框
                type: 'RANGEPICKER',
                field: 'date',
                itemConfig: {
                    label: '查询日期',
                    key: 'date',
                },
                fieldCheck: {
                    initialValue: [moment('2019-10-12', 'YYYY-MM-DD'), moment('2019-08-12', 'YYYY-MM-DD')],
                    rules: [{ type: 'array', required: true, message: '请选择时间' }],
                },
                propsConfig: {
                    style: { width: 280 },
                    placeholder: ['开始时间', '时间结束'],
                    // format: 'YYYY-MM-DD HH:mm:ss'
                },
            },
            {// 文本框
                type: 'TEXTAREA',
                field: 'content',
                itemConfig: {
                    label: '发布文章',
                    key: 'content',
                },
                fieldCheck: {
                    initialValue: '我是默认内容..',
                    rules: [{ required: true, message: '请输入文章' }],

                },
                propsConfig: {
                    style: { width: 280 },
                    placeholder: '请输入内容96',
                    allowClear: true,
                    autoSize: { minRows: 2, maxRows: 26 },
                },
            },
            {
                // 点击上传
                type: 'UPLOAD',
                field: 'upload',// 发到后台的参数名
                uploadTitle: '点击上传',
                itemConfig: {
                    label: '点击上传文件',
                    extra: '详情说明信息~~',
                    key: 'upload',
                },
                fieldCheck: {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    rules: [{ required: false, message: '请选择文件...' }],
                },
                propsConfig: {
                    style: { width: 280 },
                    name: 'upload',
                    action: '/upload/img',
                    accept: '.jpg,.png,.gif.doc.exe',//.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document
                    multiple: true,
                    listType: 'picture',//列表的内建样式 text, picture picture-card
                }
            },
            {
                // 拖动 + 点击上传
                type: 'DRAGGER',
                field: 'dragger',// 发到后台的参数名
                uploadTitle: '点击 或 拖拽文件到此处上传',
                uploadDesc: '支持单个或批量上传.。',
                itemConfig: {
                    label: '点击拖拽上传文件',
                    key: 'dragger',
                },
                fieldCheck: {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    rules: [{ required: false, message: '请选择文件...' }],
                },
                propsConfig: {
                    style: { width: 280 },
                    name:'dragger',
                    action: '/upload/img',
                    accept: '.jpg,.png,.gif.doc.exe',
                    multiple: true,
                    listType: 'picture'
                },
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
