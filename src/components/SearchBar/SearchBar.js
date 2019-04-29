import React from 'react';
import './SearchBar.css'
import {reduxForm, Field} from 'redux-form';
import { searchMovie } from '../../actions/index';

export class SearchBar extends React.Component {

    onSubmit(values) {
        console.log(values);
        this.props.dispatch(searchMovie());
    }

    render() {
        return (
            <div className="searchBar" >
                <form className="searchForm" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <label className="searchLabel" htmlFor="search">Search</label>
                    <Field name="search" id="search" type="text" component="input" required />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'search'
})(SearchBar);


