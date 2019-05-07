import React from 'react';
import { connect } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
import { loaderIncrement, loaderDecrement } from '../../actions/index';
import SearchBar from '../SearchBar/SearchBar';
import './SearchPage.css';
export class SearchPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(loaderIncrement());
        setTimeout(() => {
            this.props.dispatch(loaderDecrement())
        }, 2000)
    }

    render() {

        return (
            <div className="container">
                {/* <NavBar /> */}
                <div className="unique-searchBar">
                    <SearchBar />
                </div>
               <SearchResults />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
});

export default connect(mapStateToProps)(SearchPage);

