import React from 'react';
import { connect } from 'react-redux';
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem'
import './SearchResults.css'

export class SearchResults extends React.Component {


    render() {

        const searchResults = this.props.movieSearch.map((item, index) => {
            return (
                <SearchResultsItem data={item} index={index} />
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
    movieSearch: state.app.movieSearch
});

export default connect(mapStateToProps)(SearchResults);

