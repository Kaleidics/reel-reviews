import React from 'react';
import './Cast.css';
import { Actors } from '../Actors/Actors'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Cast extends React.Component {

  componentDidMount() {
    // the trick
    setTimeout(() => {
      this.forceUpdate();
    }, 50);
  }
    render(){

    let settings = {
      infinite: false,
      arrows: false,
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
        const cast = this.props.cast.map((item, index) => {
            return (
                <Actors data={item} index={index} key={this.props.cast[index].id} id={this.props.cast[index].id} />
            );
        });

        return (
            <div className="inner-carousel">
            <h3>{this.props.title}</h3>
                <Slider {...settings}>
                    {cast}
                </Slider>
                <hr className="carousel-divider"/>
            </div>
        )
    }
}


