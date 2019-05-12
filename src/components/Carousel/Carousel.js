import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import { settings } from './Settings';
import './Carousel.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Carousel extends React.Component {

  componentDidMount() {
    // the trick
    setTimeout(() => {
      this.forceUpdate();
    }, 50);
  }

    render(){

        const carousel = this.props.movies.map((item, index) => {
            return (
                <CarouselItem data={item} index={index} key={this.props.movies[index].id} id={this.props.movies[index].id} />
            );
        });

        return (
            <div className="inner-carousel">
            <h2>{this.props.title}</h2>
                <Slider {...settings}>
                    {carousel}
                </Slider>
                <hr className="carousel-divider"/>
            </div>
        );
    }
}


