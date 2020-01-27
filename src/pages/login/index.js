import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.less';
import { login } from '../../redux/actions';
const FormItem = Form.Item

class Login extends Component {

    state = {
        formWidth: '400px',
        adminTitle: 'Hailen后台管理系统',
        contact: 'http://wpa.qq.com/msgrd?v=3&uin=759430324&site=qq&menu=yes'
    }

    keyUpSubmit = (e) => {
        if (e.keyCode === 13) {
            this.handleSubmit(e)
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        // let subFormData = this.props.form.getFieldsValue() // 也可以获取提交参数
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('验证参数: ', values);
                const { username, password } = values
                this.props.login(username, password) // 异步action登录请求
                // const user = values
                // userInfo.saveUser(user) // 本地存储
                // this.props.history.push('/')
                // this.props.history.replace('/')


            }
        })
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const user = this.props.user
        console.log('是否登录:', user, user.username);

        // const errorMsg = this.props.username.errorMsg
        if (user.username) {
            return <Redirect to='/' />
        }

        // if (username && username.errorMsg) {
        //     message.error(errorMsg)
        // }

        // 表单内容配置
        const formData = {
            formConfig: {
                layout: 'vertical',//'horizontal'|'vertical'|'inline', inline会默认添加冒号
                hideRequiredMark: true,//是否隐藏*号
                labelAlign: 'right',//'left' | 'right'
                colon: true, // 添加标题的冒号,只有在horizontal下生效
            },
            formList: [
                {// 输入框
                    type: 'INPUT',
                    field: 'username',
                    itemConfig: {
                        // label: '用户名',
                        key: 'username',
                    },
                    fieldCheck: {
                        initialValue: '',
                        rules: [{ required: true, message: '请输入用户名!' }],
                    },
                    propsConfig: {
                        type: 'text',
                        allowClear: true,
                        placeholder: '请输入用户名',
                        onKeyUp: this.keyUpSubmit,
                        prefix: <Icon type="user" />,
                    }
                },
                {// 输入框
                    type: 'INPUT',
                    field: 'password',
                    itemConfig: {
                        // label: '密码',
                        key: 'password',
                    },
                    fieldCheck: {
                        initialValue: '',
                        rules: [{ required: true, message: '请输入密码!' }],
                    },
                    propsConfig: {
                        type: 'password',
                        allowClear: true,
                        placeholder: '请输入密码',
                        onKeyUp: this.keyUpSubmit,
                        prefix: <Icon type="lock" />,
                    }
                },
            ]
        }
        // 表表单项渲染
        const initFormList = () => {
            const formItemList = [] // 表单渲染接收数组
            const formList = formData.formList
            if (formList && formList.length > 0) {
                formList.forEach((item, i) => {
                    let { field, itemConfig, fieldCheck, propsConfig } = item

                    if (item.type === 'INPUT') {
                        const INPUT = <FormItem {...itemConfig}>
                            {getFieldDecorator([field], { ...fieldCheck })(
                                <Input {...propsConfig} />
                            )}
                        </FormItem>
                        formItemList.push(INPUT)
                    }
                })
            }
            return formItemList
        }

        return (
            <div className="login-container">
                <div className="login" style={{ width: this.state.formWidth }}>
                    <Card title={this.state.adminTitle} extra={<a href={this.state.contact}>QQ联系</a>}>
                        <Form className="login-form" {...formData.formConfig}>
                            {initFormList()}
                            <FormItem {...formData.formTailLayout}>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>记住我</Checkbox>)}
                                <a className="login-form-forgot" href="javascripr:;">忘记密码?</a>
                            </FormItem>


                            <FormItem  {...formData.formTailLayout}>
                                <Button
                                    type="primary"
                                    className="login-button"
                                    onClick={this.handleSubmit}>登录</Button>
                                <div className="now-register">
                                    还没有帐号? <a href="javascripr:;">现在注册</a>
                                </div>
                            </FormItem>
                        </Form>
                    </Card>
                </div>
            </div>
        )
    }
}
const wrapLogin = Form.create({ name: 'normal_login' })(Login);
export default connect(
    state => ({ user: state.user }),
    { login } // actions里面的login登录函数
)(wrapLogin)