import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../Search/Search'
import {searchMovie} from '../../actions/index';

export class SearchPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(searchMovie());
    }

    render() {

        return (
            <div >
               <SearchBar />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    results: state.movieSearch
});

export default connect(mapStateToProps)(SearchPage);

