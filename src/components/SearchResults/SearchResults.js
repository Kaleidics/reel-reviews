import React from "react";
import { connect } from "react-redux";
import { searchMovie, setSearchTerm } from "../../actions/index";
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";

import "./SearchResults.css";

export class SearchResults extends React.Component {
    componentDidMount() {
        //Tricky way to handle navigation/routing forwards/backwards between movie clicks/history
        //Not optimal, currently it makes two requests, which is necessary for app to work.
        //One for native browser event and the second for app feature functionality
        //without the second repeated dispatch calls, the app will not dispatch the action
        window.onpopstate = () => {
            const params = new URL(document.location).searchParams;
            const searchterm = params.get("query");
            this.props.dispatch(setSearchTerm(searchterm));
            this.props.dispatch(searchMovie(searchterm));
        };

        const params = new URL(document.location).searchParams;
        const searchterm = params.get("query");
        this.props.dispatch(setSearchTerm(searchterm));
        this.props.dispatch(searchMovie(searchterm));
    }

    render() {
        const searchResults = this.props.movieSearch.map((item, index) => {
            return <SearchResultsItem data={item} index={index} key={this.props.movieSearch[index].id} id={this.props.movieSearch[index].id} />;
        });

        return (
            <div className="searchResults">
                <div className="searchResults-div">
                    <h2 className="searchResults-h2">Search Results</h2>
                    <hr />
                </div>
                <div className="searchResults-movies">{searchResults}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movieSearch: state.app.movieSearch,
    searchTerm: state.app.searchTerm
});

export default connect(mapStateToProps)(SearchResults);
