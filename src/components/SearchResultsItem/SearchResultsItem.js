import React from 'react';
import './SearchResultsItem.css';

export default function SearchResultsItem(props){
    return (
        <div className="movieResultsContainer">
            <img className="movieResultsPoster" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt={props.data.title} />
        </div>
    );
}