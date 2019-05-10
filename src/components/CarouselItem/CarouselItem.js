import React from 'react';
import './CarouselItem.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecon, fetchMovieDetails } from '../../actions/index';
import { withRouter } from 'react-router-dom';

export class CarouselItem extends React.Component{

    handleId = e => {
        let movieId = this.props.id
        console.log("carousel item", movieId); //this is returning undefined
        this.props.dispatch(fetchRecon(movieId));
        this.props.dispatch(fetchMovieDetails(movieId));
        this.props.history.push(`/movie-detail?query=${movieId}`);
        // const params = (new URL(document.location)).searchParams;
        // const searchterm = params.get("query");
        // console.log('here', searchterm);
        
    }

    render() {

        let genres = this.props.genres;
        let genreList = this.props.genres.length;

        function getGenreText(id) {
            for (let i = 0; i < genreList; i++) {
                if (genres[i].id == id) {
                    return genres[i].name;
                }
            }
        }

        if (this.props.data) {
            return (
                <div className="movieContainer" onClick={this.handleId}>
                    <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} alt={this.props.data.title} />
                    <h3 className="movieName">{this.props.data.title}</h3>
                    <p className="movieGenre">{getGenreText(this.props.data.genre_ids[0])}</p>
                </div>

            );
        }   
    }
}

const mapStateToProps = state => ({
    genres: state.app.genres
});

export default connect(mapStateToProps)(withRouter(CarouselItem));
