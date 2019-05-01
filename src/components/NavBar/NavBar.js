import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'
import { Link, withRouter } from 'react-router-dom';


export default class NavBar extends React.Component {

    render() {
        
        return (
            <header className="navBar">
               <ul className="navBar-ul">
                   <li className="logo"><Link to="/">Home</Link></li>
                   <li><SearchBar /></li>
                   <li><a>Login/Register</a></li>
               </ul>
            </header>
        )
    }
}


