import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import Logout from '../Logout/Logout';
import logo from '../../assets/logo.png'
import './NavBar.css';



export class NavBar extends React.Component {

    render() {
        
        return (
            <header className="navBar">

                <div className="mobile-nav-container">
                    <div className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
                    <div class="content content-hidden unhide-content">
                        <div class="icon1"></div>
                        <div class="icon2"></div>
                        <div class="icon3"></div>
                    </div>
                </div>
                <ul className="navBar-ul mobile-options-hidden">
                   {/* <li className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></li> */}
                    <li className="search-bar hide-nav-mobile"><SearchBar /></li>
                    <li className="home hide-nav-mobile"><Link to="/">Home</Link></li>
                    <li className="profile hide-nav-mobile"><Link to="/dashboard">{this.props.authState === true ? 'Profile' : 'Login | Sign Up'}</Link></li>
                    <li className="profile hide-nav-mobile">{this.props.authState === true ? <Logout /> : '' }</li>
               </ul>
            </header>
        );
    }
}


const mapStateToProps = state => ({
    authState: state.app.authState
});

export default connect(mapStateToProps)(NavBar);