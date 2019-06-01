import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/index';
import './Signup.css';

export class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayname: "",
            username: "",
            password: ""
        }
    }

    handleRegister = e => {
        e.preventDefault();                 
        this.props.registerUser(this.state);
    }

    render() {
        return (
            <div className="form-container sign-up-container">
                <form className="sign-up-form" onSubmit={this.handleRegister}>
                    <h2>Create Account</h2>
                    <label htmlFor="displayname">Display Name</label>
                    <input id="displayname" type="text" placeholder="" onChange={e => this.setState({ displayname: e.target.value })} required />
                    <label htmlFor="username">Username</label>
                    <input id="usernme" type="text" placeholder="" onChange={e => this.setState({ username: e.target.value })} required />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="" onChange={e => this.setState({ password: e.target.value })} required />
                    <button className="toggle-btn">Sign Up</button>
                </form>
            </div>
        );
    }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (userInfo) => {
            dispatch(registerUser(userInfo));
        }
    }
}

export default connect(null, mapDispatchToProps)(Signup);