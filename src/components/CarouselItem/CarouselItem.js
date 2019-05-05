import React from 'react';
import './CarouselItem.css';

export default function CarouselItem(props){
    return (
        <div className="movieContainer">
            <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt={props.data.title} />
            <h3 className="movieName">{props.data.original_title}</h3>
            <p className="movieGenre">{props.data.genre_ids[0]}</p>
        </div>

    );
}