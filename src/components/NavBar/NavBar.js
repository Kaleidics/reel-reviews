import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/logo.png'
import './NavBar.css';



export default class NavBar extends React.Component {

    render() {
        
        return (
            <header className="navBar">
               <ul className="navBar-ul">
                   <li className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></li>
                    <li className="search-bar"><SearchBar /></li>
                    <li className="home"><Link to="/">Home</Link></li>
                   <li className="profile"><Link to="/dashboard">Profile</Link></li>
               </ul>
            </header>
        )
    }
}


