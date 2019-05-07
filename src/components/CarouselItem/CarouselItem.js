import React from 'react';
import './CarouselItem.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecon } from '../../actions/index';
import { withRouter } from 'react-router-dom';



export class CarouselItem extends React.Component{

    
    handleId = e => {
        let movieId = this.refs.movie.value
        console.log(movieId); //this is returning undefined
        // this.props.history.push(`/movie-details?query=${movieId}`);
        // const params = (new URL(document.location)).searchParams;
        // const searchterm = params.get("query");
        // console.log('here', searchterm);
        // this.props.dispatch(fetchRecon(movieId));
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


        // this component looks like this in devtools <CarouselItem index={0} id={299534} />
        return (
            <div className="movieContainer" value={this.props.id} ref="movie" onClick={this.handleId}>
                <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} alt={this.props.data.title} />
                <h3 className="movieName">{this.props.data.original_title}</h3>
                <p className="movieGenre">{getGenreText(this.props.data.genre_ids[0])}</p>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    genres: state.app.genres
});

export default connect(mapStateToProps)(CarouselItem);
