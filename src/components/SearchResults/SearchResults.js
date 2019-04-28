import React from 'react';
import { connect } from 'react-redux';
import CarouselItem from '../CarouselItem/CarouselItem'

export class SearchResults extends React.Component {


    render() {

        const searchResults = this.props.movieSearch.map((item, index) => {
            return (
                <CarouselItem data={item} index={index} />
            );
        });

        return (
            <div >
                {searchResults}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movieSearch: state.movieSearch
});

export default connect(mapStateToProps)(SearchResults);

