import React from 'react';
import { connect } from 'react-redux';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
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
                    <Signup />
                    <Login />
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

