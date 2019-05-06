import React from 'react';
import './SearchResultsItem.css';
import { connect } from 'react-redux';

export function SearchResultsItem(props){

    let genres = props.genres;
    let genreList = props.genres.length;

    function getGenreText(id) {
        for (let i = 0; i < genreList; i++) {
            if (genres[i].id == id) {
                return genres[i].name;
            }
        }
    }

    return (
        <div className="movieResultsContainer">
            <img className="movieResultsPoster" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt={props.data.title} />
            <h3 className="movieName">{props.data.original_title}</h3>
            <p className="movieGenre">{getGenreText(props.data.genre_ids[0])}</p>
        </div>
    );
}

const mapStateToProps = state => ({
    genres: state.app.genres
});

export default connect(mapStateToProps)(SearchResultsItem);