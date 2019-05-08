import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
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

    let settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 7
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };
        console.log("carousel probs", this.props);
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
        )
    }
}


