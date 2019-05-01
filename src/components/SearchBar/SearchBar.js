import React from 'react';
import './SearchBar.css'
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSearchTerm } from '../../actions/index';

export class SearchBar extends React.Component {
    // handleSubmit(values) {
    //     this.props.dispatch(setSearchTerm(values.search));
    //     // this.props.history.push("/search");
    // }


    handleSearchinput = e => {
        e.preventDefault();
        let searchTerm = this.refs.search.value;
        console.log(searchTerm);
        this.props.history.push(`/search/${searchTerm}`)
        this.props.dispatch(setSearchTerm(searchTerm));
    }

    render() {
        // console.log(this.props.searchTerm)
        // if (this.props.searchTerm) {
        //     return (
        //         <Redirect to='/search' />
        //     )
        // }
        return (
            <div className="searchBar" >
                <form className="searchForm" onSubmit={this.handleSearchinput} >
                    <input type="text" placeholder="Search for a movie" ref="search" />
                            <button type="submit">Search</button>
                    </form>
                
            </div>
        );
    }
}

// const comp = reduxForm({
//     form: 'search'
// })(SearchBar);

const mapStateToProps = state => ({
    movieSearch: state.app.movieSearch,
    searchTerm: state.app.searchTerm
});

export default connect(mapStateToProps)(withRouter(SearchBar));

