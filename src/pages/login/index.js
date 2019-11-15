import React, { Component } from 'react'
import { Card, Form, Icon, Input, Button, Checkbox, message, Select } from 'antd';
const FormItem = Form.Item
const Option = Select.Option


const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class Login extends Component {
    handleSubmit = e => {
        // 1.form的onsubmit属性提交方式
        // e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('参数: ', values);
        //     }
        // });


        // 1.form的按钮事件点击提交方式
        let formData = this.props.form.getFieldsValue()
        console.log('表单值: ', formData);
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('验证参数: ', values);
                message.success('成功')
            }
        })
    };
    // 重置
    consthandleReset = e => {
        this.props.form.resetFields();
    };
    
    // 兴趣爱好
    constinterestHandle = val => {
        console.log(val);
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const FormItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 20
            }
        }
        // 表单内容偏移
        // const offsetLayout = {
        //     wrapperCol: {
        //         xs: 24,
        //         sm: {
        //             span: 12,
        //             offset:4
        //         }
        //     }
        // }

        return (
            <div>
                <Card title="登录表单" extra={<a href="javascripr:;">更多</a>}>
                    {/* <Form onSubmit={this.handleSubmit} className="login-form" style={{ width: 200 }}> */}
                    <Form className="login-form" {...FormItemLayout}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请填写用户名' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </FormItem>
                        <FormItem label="标题显示">
                            <Input type="password" placeholder="Password" />,
                        </FormItem>
                        <FormItem label="选择爱好">
                            {getFieldDecorator('interest', {
                                rules: [{ required: true, message: '请选择爱好' }],
                                initialValue: ['a10', 'c12']

                            })(
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    // onChange={interestHandle}
                                >
                                    {children}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住我</Checkbox>)}
                            <br />
                            <a className="login-form-forgot" href="javascripr:;">
                                忘记密码? </a>
                            {/* <Button type="primary" htmlType="submit" className="login-form-button">登录</Button> */}
                            <Button onClick={this.handleSubmit} className="login-form-button">登录</Button>
                            <Button onClick={this.handleReset} className="login-form-button">重置</Button>
                            或者 <a href="javascripr:;">现在注册!</a>
                        </FormItem>
                    </Form>

                </Card>
            </div>
        )
    }
}
export default Form.create({ name: 'normal_login' })(Login);