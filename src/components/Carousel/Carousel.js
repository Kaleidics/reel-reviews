import React from 'react';
import { connect } from 'react-redux';
import CarouselItem from '../CarouselItem/CarouselItem';
import {fetchUpcoming} from '../../actions';

export class Carousel extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUpcoming());
    }

    render(){
        const carousel = this.props.movies.map((item, index) => {
            return (
                <CarouselItem data={item} index={index} />
            );
        });

        return (
            <div>
                {carousel}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
});

export default connect(mapStateToProps)(Carousel);
