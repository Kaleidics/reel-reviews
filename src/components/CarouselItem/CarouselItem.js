import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRecon, fetchMovieDetails, fetchActors, fetchMovieTrailer } from '../../actions/index';
import './CarouselItem.css';

export class CarouselItem extends React.Component{

    handleId = e => {
        window.scrollTo(0, 0);
        let movieId = this.props.id
        //move trailer breaking navigation for some reason replaced with poster for now
        // this.props.dispatch(fetchMovieTrailer(movieId));
        this.props.dispatch(fetchRecon(movieId));
        this.props.dispatch(fetchMovieDetails(movieId));
        this.props.dispatch(fetchActors(movieId));
        this.props.history.push(`/movie-detail?query=${movieId}`);       
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
                    <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} alt={this.props.data.title} />
                    <h3 className="movieName">{this.props.data.title}</h3>
                    <p className="movieGenre">{getGenreText(this.props.data.genre_ids[0])}/{getGenreText(this.props.data.genre_ids[1])}</p>
                </div>

            );
        }   
    }
}

const mapStateToProps = state => ({
    genres: state.app.genres
});

export default connect(mapStateToProps)(withRouter(CarouselItem));
