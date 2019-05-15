import React from 'react';
import { connect } from 'react-redux';
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
        console.log('triggered handle register');
        console.log(this.state);
        console.log(this);
        this.props.loginUser(this.state);
    }

    guestLogin = e => {
        e.preventDefault();
        console.log('triggered')
        this.setState({
            username: "Guest",
            password:"123123"
        }, () => {
                console.log('triggered login');
                console.log(this.state);
                console.log(this);
                this.props.loginUser(this.state);
                console.log('after')
        });
        
    }

    render(){
        return (
            <div className="form-container login-container">
                <form className="login-form" onSubmit={this.handleLogin} >
                    <h2>Login in</h2>
                    <input type="text" placeholder="Username" onChange={e => this.setState({ username: e.target.value })}/>
                    <input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })}/>
                    <button className="toggle-btn">Log In</button>
                    <button className="guest-toggle-btn" onClick={this.guestLogin}>Guest Log In</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (userInfo) => {
            dispatch(loginUser(userInfo));
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);