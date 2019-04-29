import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../Search/Search'
import SearchResults from '../SearchResults/SearchResults'
import {searchMovie} from '../../actions/index';
import NavBar from '../NavBar/NavBar'

export class SearchPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(searchMovie());
    }

    render() {

        return (
            <div>
                <NavBar />
               <SearchResults />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
});

export default connect(mapStateToProps)(SearchPage);

