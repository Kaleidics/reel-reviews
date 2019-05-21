import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/index';

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
                    <input type="text" placeholder="Display Name" onChange={e => this.setState({ displayname: e.target.value })} required />
                    <input type="text" placeholder="Username" onChange={e => this.setState({ username: e.target.value })} required />
                    <input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} required />
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