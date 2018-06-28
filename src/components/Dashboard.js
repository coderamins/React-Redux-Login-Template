import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'antd';


class Dashboard extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        console.log(this.props.session);
        console.log(this.props.contacts);
        return (
            <Row>
                <Col>
                    Congratz, you've logged in!
                </Col>
            </Row>
        );
    }
}

const select = state => ({
    contacts: state,
    session: state.session,
    search: state
});

export default connect(select)(Dashboard);

