import React from 'react';
import { connect } from 'react-redux';
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem';
import { searchMovie } from '../../actions/index';
import { setSearchTerm } from '../../actions/index';

import './SearchResults.css'

export class SearchResults extends React.Component {

    componentDidMount() {
        const { searchTerm } = this.props;
        // this.props.dispatch(setSearchTerm(undefined));
        if (searchTerm) {
            this.props.dispatch(searchMovie(searchTerm));
        }
    }

    render() {

        const searchResults = this.props.movieSearch.map((item, index, key) => {
            return (
                <SearchResultsItem data={item} index={index} key={this.props.movieSearch[index].id}/>
            );
        });

        return (
            <div className="searchResults">
                <div className="searchResults-div">
                    <h2 className="searchResults-h2">Search Results</h2>
                    <hr></hr>
                </div>
                <div className="searchResults-movies">
                    {searchResults}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movieSearch: state.app.movieSearch,
    searchTerm: state.app.searchTerm
});

export default connect(mapStateToProps)(SearchResults);

