import React, { Component } from 'react'
import { Input, Select, Form, Button, Checkbox, DatePicker, Radio, Upload, Icon } from "antd";
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const FormItem = Form.Item
const Option = Select.Option
const CheckboxGroup = Checkbox.Group
const RadioGroup = Radio.Group
const { TextArea } = Input;
const { MonthPicker, RangePicker } = DatePicker;
const UploadDragger = Upload.Dragger;

class BaseForm extends Component {
    state = {
        formConfig: this.props.formData.formConfig
    }

    // 表表单项渲染
    initFormList = () => {
        const { getFieldDecorator } = this.props.form // antd中处理表单的方法
        const { formList } = this.props.formData    // 表单项渲染数据
        const formItemList = [] // 表单渲染接收数组

        if (formList && formList.length > 0) {
            formList.forEach((item, i) => {
                let label = item.label
                let field = item.field
                let initialValue = item.initialValue
                let placeholder = item.placeholder
                let width = item.width
                let rules = item.rules
                let allowClear = item.allowClear
                let dateFormat = item.dateFormat
                let autoSize = item.autoSize
                // 上传
                let extra = item.extra
                let action = item.action
                let accept = item.accept
                let listType = item.listType
                let uploadTitle = item.uploadTitle
                let multiple = item.multiple


                if (item.type === 'INPUT') {
                    const INPUT = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                initialValue: initialValue,
                                rules: rules,
                            })(
                                <Input
                                    type="text"
                                    style={{ width: width }}
                                    placeholder={placeholder}
                                    allowClear={allowClear}
                                />
                            )
                        }
                    </FormItem>
                    formItemList.push(INPUT)
                } else if (item.type === 'SELECT') {
                    const SELECT = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                // initialValue: initialValue,
                                rules: rules
                            })(
                                <Select
                                    style={{ width: width }}
                                    placeholder={placeholder}
                                >
                                    {this.getSelectList(item.list)}
                                </Select>
                            )
                        }
                    </FormItem>
                    formItemList.push(SELECT)
                } else if (item.type === 'CHECKBOX') {
                    const CHECKBOX = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                // valuePropName: 'checked',
                                initialValue: initialValue,// 必须是true/false
                                rules: rules
                            })(
                                <CheckboxGroup
                                    style={{ width: width }}
                                >
                                    {this.getCheckboxGroup(item.list)}
                                </CheckboxGroup>
                            )
                        }
                    </FormItem>
                    formItemList.push(CHECKBOX)

                } else if (item.type === 'RADIO') {
                    const RADIO = <Form.Item label={label} key={field}>
                        {getFieldDecorator([field], {
                            initialValue: initialValue,
                            rules: rules
                        })(
                            <RadioGroup
                                style={{ width: width }}
                            >
                                {this.getRadioGroup(item.list)}
                            </RadioGroup>
                        )}
                    </Form.Item>
                    formItemList.push(RADIO)

                } else if (item.type === 'RANGEPICKER') {
                    const RANGEPICKER = <FormItem label={label} key={field}>
                        {getFieldDecorator([field], {
                            rules: rules,
                            initialValue: [moment(initialValue[0], dateFormat), moment(initialValue[1], dateFormat)]
                        })(<RangePicker
                            placeholder={placeholder}
                            style={{ width: width }}
                            format={dateFormat}
                        />)}
                    </FormItem>
                    formItemList.push(RANGEPICKER)
                } else if (item.type === 'TEXTAREA') {
                    const TEXTAREA = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                initialValue: initialValue,
                                rules: rules,
                            })(
                                <TextArea
                                    style={{ width: width }}
                                    placeholder={placeholder}
                                    allowClear={allowClear}
                                    autoSize={autoSize}
                                />
                            )
                        }
                    </FormItem>
                    formItemList.push(TEXTAREA)
                } else if (item.type === 'UPLOAD') {
                    const UPLOAD = <FormItem label={label} extra={extra}>
                        {getFieldDecorator([field], {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                            rules: rules
                        })(
                            <Upload
                                width={width}
                                name={field}
                                action={action}
                                accept={accept}
                                multiple={multiple}
                                listType={listType}>
                                <Button>
                                    <Icon type="upload" />{uploadTitle}
                                </Button>
                            </Upload>,
                        )}
                    </FormItem>
                    formItemList.push(UPLOAD)
                } else if (item.type === 'DRAGGER') {
                    const DRAGGER = <FormItem label={label} extra={extra}>
                        {getFieldDecorator([field], {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <UploadDragger
                                width={width}
                                name={field}
                                action={action}
                                accept={accept}
                                multiple={multiple}
                                listType={listType}
                            >
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">{uploadTitle}</p>
                                <p className="ant-upload-hint">{extra}</p>
                            </UploadDragger>,
                        )}
                    </FormItem>
                    formItemList.push(DRAGGER)
                }
            })
        }
        return formItemList
    }
    // 处理select option
    getSelectList(list) {
        if (!list) {
            return []
        }
        return list.map(item => <Option value={item.value} key={item.value}>{item.name}</Option>)
    }
    // 处理checkbox group
    getCheckboxGroup(group) {
        if (!group) {
            return []
        }
        return group.map(item => <Checkbox value={item.value} key={item.value}>{item.name}</Checkbox>)
    }
    // 处理radio group
    getRadioGroup(group) {
        if (!group) {
            return []
        }
        return group.map(item => <Radio value={item.value} key={item.value}>{item.name}</Radio>)
    }
    normFile = e => {
        console.log('上传事件:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    // 提交
    submitHandle = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) { return; }
            this.props.submitData(values)
        });

        // 提交参数
        // const formData = this.props.form.getFieldsValue()
        // // 将数据通过属性方法, 提交到父组件
        // this.props.submitData(formData)
    }
    // 重置
    resetHandle = () => {
        this.props.form.resetFields();
    }
    render() {
        return (
            <Form {...this.state.formConfig}>
                {/* 渲染表单 */}
                {this.initFormList()}
                <FormItem>
                    <Button type="primary" style={{ mrgin: '0 20px' }} onClick={this.submitHandle}>查询</Button>
                    <Button onClick={this.resetHandle}>重置</Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create({})(BaseForm)
