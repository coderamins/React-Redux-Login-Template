import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Row, Col, Divider} from 'antd';
import NormalLoginForm from './Forms/LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }

    }

    updateUser=(e)=>{
        //console.log(e.target.value);
        this.setState({
            username: e.target.value
        });
    }

    updatePass=(e)=>{
        //console.log(e.target.value);
        this.setState({
            password: e.target.value
        });
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
                    <NormalLoginForm username={this.state.username} password={this.state.password}
                                     updateUser={this.updateUser} updatePass={this.updatePass}
                    />
                </Col>
            </Row>
        );
    }
}

Login.contextTypes = {
    router: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        route: state.session
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);