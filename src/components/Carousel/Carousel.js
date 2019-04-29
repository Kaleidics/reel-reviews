import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import './Carousel.css'

export class Carousel extends React.Component {

    render(){
        const carousel = this.props.movies.map((item, index, key) => {
            return (
                <CarouselItem data={item} index={index} key={this.props.movies[index].id} />
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


