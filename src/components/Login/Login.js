import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../actions/index";
import "./Login.css";

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    handleLogin = e => {
        e.preventDefault();
        this.props.loginUser(this.state);
    };

    guestLogin = e => {
        e.preventDefault();
        this.setState(
            {
                username: "Guest",
                password: "123123"
            },
            () => {
                this.props.loginUser(this.state);
            }
        );
    };

    render() {
        if (this.props.authState === true) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="form-container login-container">
                <form className="login-form" onSubmit={this.handleLogin}>
                    <h2>Login</h2>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="" onChange={e => this.setState({ username: e.target.value })} required />
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" type="password" placeholder="" onChange={e => this.setState({ password: e.target.value })} required />
                    <button className="toggle-btn">Log In</button>
                    <button className="guest-toggle-btn" onClick={this.guestLogin}>
                        Guest Log In
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authState: state.app.authState
});

const mapDispatchToProps = dispatch => {
    return {
        loginUser: userInfo => {
            dispatch(loginUser(userInfo));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
