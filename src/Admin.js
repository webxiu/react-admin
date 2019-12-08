import React, { Component } from 'react'
// import { Row, Col } from 'antd';
import { Layout } from 'antd';
import { Redirect } from 'react-router-dom';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Footer from './components/Footer';
import memoryInfo from './utils/memoryInfo';
import "./style/common.css";
const { Sider, Content } = Layout;

export default class Admin extends Component {
    render() {
        let user = memoryInfo.user
        if(!user.username){
            return <Redirect to="/login" />
        }
        return (
            // <Row className="container">
            //     <Col span={4} className="nav-left"
            //         style={{ width: 256 }}
            //     >
            //         <NavLeft />
            //     </Col>
            //     <Col span={20} offset={4} className="main">
            //         <Header></Header>
            //         <Row className="content">
            //             {this.props.children}
            //         </Row>
            //         <Footer></Footer>
            //     </Col>
            // </Row>

            <Layout style={{height: '100%'}}>
                <Sider>
                    <NavLeft />
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        )
    }
}
