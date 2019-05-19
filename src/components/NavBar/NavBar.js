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
               <ul className="navBar-ul">
                   <li className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></li>
                    <li className="search-bar"><SearchBar /></li>
                    <li className="home"><Link to="/">Home</Link></li>
                    <li className="profile"><Link to="/dashboard">{this.props.authState === true ? 'Profile' : 'Login | Sign Up'}</Link></li>
                    <li className="profile">{this.props.authState === true ? <Logout /> : '' }</li>
               </ul>
            </header>
        )
    }
}


const mapStateToProps = state => ({
    authState: state.app.authState
});

export default connect(mapStateToProps)(NavBar);