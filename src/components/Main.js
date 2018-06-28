import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import Login from './Login';
import Dashboard from './Dashboard';
const { Content } = Layout;


class Main extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Layout>
                <Content>
                    <Router>
                        <Switch>
                            <Route exact={true} path='/' component={Login} />
                            <Route path='/dash' component={Dashboard} />
                        </Switch>
                    </Router>
                </Content>
            </Layout>
        );
    }
}

const select = state => ({
    toasts: state
});

export default connect(select)(Main);
