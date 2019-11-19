import React, { Component } from 'react'
import { Input, Select, Form, Button, Checkbox, Radio } from "antd";
const FormItem = Form.Item
const Option = Select.Option

class BaseForm extends Component {
    state = {
        layout: this.props.formData.layout
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
                let defaultValue = item.defaultValue
                let placeholder = item.placeholder
                let width = item.width
                let rules = item.rules
                let allowClear = item.allowClear


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
                                initialValue: initialValue,
                                rules: rules
                            })(
                                <Select
                                    style={{ width: width }}
                                    placeholder={placeholder}
                                >
                                    {this.getOptionList(item.list)}
                                </Select>
                            )
                        }
                    </FormItem>
                    formItemList.push(SELECT)
                } else if (item.type === 'CHECKBOX') {
                    const CHECKBOX = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                valuePropName: 'checked',
                                initialValue: initialValue,// 必须是true/false
                                rules: rules
                            })(
                                <Checkbox
                                    style={{ width: width }}
                                >{label}</Checkbox>
                            )
                        }
                    </FormItem>
                    formItemList.push(CHECKBOX)
                }
            })
        }
        return formItemList
    }
    // 处理option
    getOptionList(list) {
        if (!list) {
            return []
        }
        return list.map(item => <Option value={item.value} key={item.value}>{item.name}</Option>)
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
            <Form layout={this.state.layout}>
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
