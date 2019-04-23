import React from 'react';

export default function CarouselItem(props){
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt={props.data.title} />
        </div>
    );
}