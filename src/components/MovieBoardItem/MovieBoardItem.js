import React from 'react';
import './MovieBoardItem.css';

export default function MovieBoardItem(props) {
    return (
        <div className="movieBoardItem">
            <div className="movieBoard-desc">
                <div className="inner-desc">
                    <h4>{props.data.original_title}</h4>
                    <p>{props.data.overview}</p>
                </div>
              
            </div>
            <img className="inner-movieBoardItem" src={`https://image.tmdb.org/t/p/original/${props.data.backdrop_path}`} alt={props.data.title} />
        </div>
    );
}