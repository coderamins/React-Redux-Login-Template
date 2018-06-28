import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Row, Col, Divider} from 'antd';
import NormalLoginForm from './LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);

    }




    render() {

        return (
            <Row type="flex" justify="center" align="middle" gutter={16} className="row">
                <Col span={14}>
                    <h1>Login Template</h1>
                    <p>Welcome to the login template featuring react, redux and ant design. Feel free to use this template and adjust it accordingly.
                    </p>
                </Col>
                <Col span={10}>
                    <Divider orientation="left"><h2>Login</h2></Divider>
                    <NormalLoginForm />
                </Col>
            </Row>
        );
    }
}

Login.contextTypes = {
    router: PropTypes.object.isRequired,
};

const select = state => ({
    session: state.session
});

export default connect(select)(Login);