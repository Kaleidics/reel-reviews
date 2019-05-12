import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';



export default class NavBar extends React.Component {

    render() {
        
        return (
            <header className="navBar">
               <ul className="navBar-ul">
                   <li className="logo"><Link to="/">Home</Link></li>
                    <li>{this.props.location.pathname !== "/search" ? <SearchBar /> : ""}</li>
                   <li>Profile</li>
               </ul>
            </header>
        )
    }
}


