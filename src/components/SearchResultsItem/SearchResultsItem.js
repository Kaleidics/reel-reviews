import React from 'react';
import './SearchResultsItem.css';
import { connect } from 'react-redux';
import { fetchMovieDetails, fetchRecon } from '../../actions/index';
import { withRouter } from 'react-router-dom';
import movie_placeholder from '../../assets/movie_placeholder.png'


export class SearchResultsItem extends React.Component{

    handleId = e => {
        let movieId = this.props.id
        this.props.dispatch(fetchRecon(movieId));
        this.props.dispatch(fetchMovieDetails(movieId));
        this.props.history.push(`/movie-detail?query=${movieId}`);
    }

    render() {
        
        let splash = !this.props.data.poster_path ? <img className="movieResultsPoster" src={movie_placeholder} alt={"placeholder"} /> : <img className="movieResultsPoster" src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} alt={this.props.data.title} style={{ background: this.props.data.poster_path == null ? '#333' : 'transparent' }} />;

        let genres = this.props.genres;
        let genreList = this.props.genres.length;

        function getGenreText(id) {
            for (let i = 0; i < genreList; i++) {
                // eslint-disable-next-line
                if (genres[i].id == id) {
                    return genres[i].name;
                }
            }
        }

        return (
            <div className="movieResultsContainer" onClick={this.handleId}>
                {splash}
                <h3 className="movieName">{this.props.data.title}</h3>
                <p className="movieGenre">{getGenreText(this.props.data.genre_ids[0])}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genres: state.app.genres
});

export default connect(mapStateToProps)(withRouter(SearchResultsItem));