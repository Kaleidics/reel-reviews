import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/index';


export class Login extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            username: "",
            password: ""
        }
    }

    handleLogin = e => {
        e.preventDefault();
        this.props.loginUser(this.state);
    }

    guestLogin = e => {
        e.preventDefault();
        this.setState({
            username: "Guest",
            password:"123123"
        }, () => {
                this.props.loginUser(this.state);  
        });
    }

    render() {
        if (this.props.authState === true) {
           return <Redirect to="/dashboard" />
        }

        return (
            <div className="form-container login-container">
                <form className="login-form" onSubmit={this.handleLogin} >
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" onChange={e => this.setState({ username: e.target.value })} required/>
                    <input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} required/>
                    <button className="toggle-btn">Log In</button>
                    <button className="guest-toggle-btn" onClick={this.guestLogin}>Guest Log In</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authState: state.app.authState
});

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (userInfo) => {
            dispatch(loginUser(userInfo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);