import React from 'react';
import './MovieBoardItem.css';

export default function MovieBoardItem(props) {
    return (
        <div className="movieBoardItem">
            <img className="inner-movieBoardItem" src={`https://image.tmdb.org/t/p/original/${props.data.backdrop_path}`} alt={props.data.title} />
        </div>
    );
}