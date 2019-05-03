import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import './Carousel.css';
import Slider from "react-slick";

export class Carousel extends React.Component {

    render(){

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

        const carousel = this.props.movies.map((item, index) => {
            return (
                <CarouselItem data={item} index={index} key={this.props.movies[index].id} />
            );
        });

        return (
            <div className="inner-carousel">
                <Slider {...settings}>
                    {carousel}
                </Slider>
            </div>
        )
    }
}


