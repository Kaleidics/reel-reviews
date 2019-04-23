import React from 'react';
import './CarouselItem.css';

export default function CarouselItem(props){
    return (
        <div className="movieContainer">
            <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt={props.data.title} />
        </div>
    );
}