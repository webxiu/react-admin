import React, { Component } from 'react'
import { Row, Col,Button } from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Footer from './components/Footer';
import "./style/common.css";

export default class Admin extends Component {
    render() {
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={20} className="main" style={{height:'100vh'}}>
                    <Header></Header>
                    <Row className="content">
                        <Button type="primary">77777</Button>
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}