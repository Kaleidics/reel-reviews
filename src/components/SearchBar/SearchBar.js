import React from 'react';
import './SearchBar.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchMovie } from '../../actions/index';


import { setSearchTerm } from '../../actions/index';

export class SearchBar extends React.Component {
    handleSearchinput = e => {
        e.preventDefault();
        let searchTerm = this.refs.search.value;
        console.log(searchTerm);
        this.props.history.push(`/search/?query=${searchTerm}`);
        const params = (new URL(document.location)).searchParams;
        const searchterm = params.get("query");
        console.log('here',searchterm);
        this.props.dispatch(setSearchTerm(searchterm));
        this.props.dispatch(searchMovie(searchterm));
    }

    render() {
        return (
            <div className="searchBar" >
                <form className="searchForm" onSubmit={this.handleSearchinput} >
                    <input type="text" placeholder="Search for a movie" ref="search" required />
                            <button type="submit">Search</button>
                    </form>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movieSearch: state.app.movieSearch,
    searchTerm: state.app.searchTerm
});

export default connect(mapStateToProps)(withRouter(SearchBar));

