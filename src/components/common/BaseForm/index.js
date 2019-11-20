import React, { Component } from 'react'
import { Input, Select, Form, Button, Checkbox, DatePicker, Radio, Switch, Upload, Icon } from "antd";

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
                // 重构
                let field = item.field
                let itemConfig = item.itemConfig
                let fieldCheck = item.fieldCheck
                let propsConfig = item.propsConfig
                // 上传
                let uploadTitle = item.uploadTitle
                let uploadDesc = item.uploadDesc

                if (item.type === 'INPUT') {
                    const INPUT = <FormItem {...itemConfig}>
                        {getFieldDecorator([field], { ...fieldCheck })(
                            <Input {...propsConfig} />
                        )}
                    </FormItem>
                    formItemList.push(INPUT)
                } else if (item.type === 'SELECT') {
                    const SELECT = <FormItem {...itemConfig}>
                        {getFieldDecorator([field], { ...fieldCheck })(
                            <Select {...propsConfig}>
                                {this.getSelectList(item.list)}
                            </Select>
                        )}
                    </FormItem>
                    formItemList.push(SELECT)
                } else if (item.type === 'CHECKBOX') {
                    const CHECKBOX = <FormItem {...itemConfig}>
                        {getFieldDecorator([field], { ...fieldCheck })(
                            <CheckboxGroup {...propsConfig}>
                                {this.getCheckboxGroup(item.list)}
                            </CheckboxGroup>
                        )}
                    </FormItem>
                    formItemList.push(CHECKBOX)

                } else if (item.type === 'RADIO') {
                    const RADIO = <FormItem {...itemConfig}>
                        {getFieldDecorator([field], { ...fieldCheck })(
                            <RadioGroup {...propsConfig}>
                                {this.getRadioGroup(item.list)}
                            </RadioGroup>
                        )}
                    </FormItem>
                    formItemList.push(RADIO)

                } else if (item.type === 'SWITCH') {
                    const SWITCH = <FormItem {...itemConfig}>
                        {getFieldDecorator([field], { ...fieldCheck })(
                            <Switch {...propsConfig} />
                        )}
                    </FormItem>
                    formItemList.push(SWITCH)

                } else if (item.type === 'RANGEPICKER') {
                    const RANGEPICKER = <FormItem {...itemConfig}>
                        {getFieldDecorator([field], { ...fieldCheck })(
                            <RangePicker {...propsConfig} />
                        )}
                    </FormItem>
                    formItemList.push(RANGEPICKER)
                } else if (item.type === 'TEXTAREA') {
                    const TEXTAREA = <FormItem {...itemConfig}>
                        {getFieldDecorator([field], { ...fieldCheck })(
                            <TextArea {...propsConfig} />
                        )}
                    </FormItem>
                    formItemList.push(TEXTAREA)
                } else if (item.type === 'UPLOAD') {
                    const UPLOAD = <FormItem {...itemConfig}>
                        {getFieldDecorator([field], {...fieldCheck})(
                            <Upload {...propsConfig}>
                                <Button>
                                    <Icon type="upload" />{uploadTitle}
                                </Button>
                            </Upload>,
                        )}
                    </FormItem>
                    formItemList.push(UPLOAD)
                } else if (item.type === 'DRAGGER') {
                    const DRAGGER = <FormItem {...itemConfig}>
                         {getFieldDecorator([field], {...fieldCheck})(
                            <UploadDragger {...propsConfig}>
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">{uploadTitle}</p>
                                <p className="ant-upload-hint">{uploadDesc}</p>
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
