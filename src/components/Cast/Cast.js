import React from 'react';
import { Actors } from '../Actors/Actors';
import { settings } from './Settings'
import './Cast.css';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Cast extends React.Component {

    render() {

        const cast = this.props.cast.map((item, index) => {
            return (
                <Actors data={item} index={index} key={this.props.cast[index].id} id={this.props.cast[index].id} />
            );
        });

        return (
            <div className="cast-inner-carousel">
            <h3>{this.props.title}</h3>
                <Slider {...settings}>
                    {cast}
                </Slider>
                <hr className="cast-carousel-divider"/>
            </div>
        )
    }
}


