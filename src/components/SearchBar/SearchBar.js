import React from 'react';
import './SearchBar.css'
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSearchTerm } from '../../actions/index';

export class SearchBar extends React.Component {
    // handleSubmit(values) {
    //     this.props.dispatch(setSearchTerm(values.search));
    //     // this.props.history.push("/search");
    // }


    handleSearchinput = e => {
        let searchTerm = e.target.value;
        console.log(searchTerm);
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
                <form className="searchForm" >
                    <input onChange={this.handleSearchinput} type="text" placeholder="Search for a movie" />
                        <Link to={`/search/${this.props.searchTerm}`} >
                            <button type="submit">Search</button>
                        </Link>
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

export default connect(mapStateToProps)(SearchBar);

