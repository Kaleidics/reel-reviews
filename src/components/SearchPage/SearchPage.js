import React from "react";
import { connect } from "react-redux";
import { loaderIncrement, loaderDecrement } from "../../actions/index";
// import SearchBar from '../SearchBar/SearchBar';
import SearchResults from "../SearchResults/SearchResults";
import "./SearchPage.css";

export class SearchPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.dispatch(loaderIncrement());
        setTimeout(() => {
            this.props.dispatch(loaderDecrement());
        }, 2000);
    }

    render() {
        return (
            <div className="container">
                <SearchResults />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading
});

export default connect(mapStateToProps)(SearchPage);
