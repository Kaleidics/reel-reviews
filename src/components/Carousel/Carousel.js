import React from 'react';
import { connect } from 'react-redux';
import CarouselItem from '../CarouselItem/CarouselItem';
import './Carousel.css'

export class Carousel extends React.Component {
    componentDidMount() {
        this.props.dispatch(this.props.api());
    }

    render(){
        const carousel = this.props.movies.map((item, index) => {
            return (
                <CarouselItem data={item} index={index} />
            );
        });

        return (
            <div className="outer-carousel">
                <h2 className="section-title">{this.props.title}</h2>
                <div className="inner-carousel">
                    {carousel}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
});

export default connect(mapStateToProps)(Carousel);
