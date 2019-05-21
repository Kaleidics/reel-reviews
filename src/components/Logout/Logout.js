import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/index';
import './Logout.css';

export class Logout extends React.Component {

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <button className="logout-btn" onClick={this.handleLogout}>Logout</button>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutUser());
        }
    }
}

export default connect(null, mapDispatchToProps)(Logout);