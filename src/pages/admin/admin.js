import React, { Component } from 'react'
// import { Row, Col } from 'antd';
import { Layout } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import NavLeft from '../../components/NavLeft';
import Footer from '../../components/Footer';
import "../../style/common.css";
const { Sider, Content } = Layout;

class Admin extends Component {
    render() {
        let user = this.props.user
        if (!user.username) {
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

            <Layout style={{ height: '100%' }}>
                <Sider>
                    <NavLeft />
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content style={{ position: 'relative' }}>
                        <div style={{ minHeight: 'calc(100% - 60px)' }}>
                            {this.props.children}
                        </div>
                        <Footer></Footer>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}


export default connect(
    state => ({ user: state.user }),
    {}
)(Admin)