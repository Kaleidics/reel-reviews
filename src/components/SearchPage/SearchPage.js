import React from 'react';
import { connect } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults'
import NavBar from '../NavBar/NavBar'
import {loaderIncrement, loaderHandler, loaderDecrement} from '../../actions/index';
export class SearchPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(loaderIncrement());
        setTimeout(() => {
            this.props.dispatch(loaderDecrement())
        }, 2000)
    }

    render() {

        return (
            <div>
                {/* <NavBar /> */}
               <SearchResults />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
});

export default connect(mapStateToProps)(SearchPage);

