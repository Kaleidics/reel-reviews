import React from 'react';
import { connect } from 'react-redux';
import './Auth.css';

export class AuthPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: "inner-container"
        }
    }

    addClass() {
        this.setState({
            toggle: "inner-container right-panel-active"
        });
    }

    removeClass() {
        this.setState({
            toggle: "inner-container"
        });
    }

    render() {
        return (
            <div className="auth-container">
                <div className={this.state.toggle} id="container">
                    <div className="form-container sign-up-container">
                        <form className="sign-up-form">
                            <h2>Create Account</h2>
                            <input type="text" placeholder="Display Name" />
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button className="toggle-btn">Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container login-container">
                        <form className="login-form">
                            <h2>Login in</h2>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button className="toggle-btn">Log In</button>
                            <button className="guest-toggle-btn">Guest Log In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>Was it a good or bad movie? Let everyone know.</p>
                                <button className="toggle-btn movement" onClick={() => this.removeClass()}>Log in</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Movie Fan!</h1>
                                <p>Sign Up and start reviewing movies now.</p>
                                <button className="toggle-btn movement" onClick={() => {this.addClass()}}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps)(AuthPage);

