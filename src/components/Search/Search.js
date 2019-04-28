import React from 'react';
import './Search.css'

export default class SearchBar extends React.Component {

    render() {
      
        return (
            <div className="searchBar" >
                <form className="searchForm" onSubmit={e => e.preventDefault()}>
                    <label className="searchLabel" htmlFor="search">Search</label>
                    <input className="searchInput" type="search" id="search" name="search" placeholder="Search for a movie"
                    />
                    <input className="searchSubmit" type="submit" value="Search" />
                </form>
            </div>
        )
    }
}


