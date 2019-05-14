import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchMovie, setSearchTerm } from '../../actions/index';
import './SearchBar.css'

export class SearchBar extends React.Component {

    handleSearchinput = e => {
        e.preventDefault();
        let searchTerm = this.refs.search.value;
        console.log(this.props, '1')
        this.props.history.push(`/search?query=${searchTerm}`);
        const params = (new URL(document.location)).searchParams;
        const searchterm = params.get("query");
        console.log(this.props,'2')
        this.props.dispatch(setSearchTerm(searchterm));
        this.props.dispatch(searchMovie(searchterm));
        this.refs.search.value ='';
    }

    render() {
        return (
            <div className="searchBar" >
                <form className="searchForm" onSubmit={this.handleSearchinput} >
                    <label htmlFor="search">Search</label>
                    <input id="search" type="text" name="search" placeholder="Search for a movie" ref="search" required />
                            <button className="search-btn" type="submit">Search</button>
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

