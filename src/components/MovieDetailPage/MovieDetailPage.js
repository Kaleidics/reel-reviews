import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from '../Carousel/Carousel';
import { Cast } from '../Cast/Cast'
import { withRouter } from 'react-router-dom';
import { setReconId, fetchRecon, fetchMovieDetails, fetchActors, fetchMovieTrailer } from '../../actions/index';

import DetailSummary from '../DetailSummary/DetailSummary';
import './MovieDetailPage.css';

export class MovieDetailPage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        console.log('moviedetailpage had mounted')
        window.onpopstate = () => {
            const params = (new URL(document.location)).searchParams;
            const clickedMovie = params.get("query");
            console.log('here', clickedMovie);

            if(clickedMovie) {
                this.props.dispatch(setReconId(clickedMovie));
                this.props.dispatch(fetchMovieDetails(clickedMovie));
                this.props.dispatch(fetchRecon(clickedMovie));
                this.props.dispatch(fetchActors(clickedMovie));
                this.props.dispatch(fetchMovieTrailer(clickedMovie));
            }
           
            
        }
        const params = (new URL(document.location)).searchParams;
        const clickedMovie = params.get("query");
        console.log('here', clickedMovie);

        if(clickedMovie) {
            this.props.dispatch(setReconId(clickedMovie));
            this.props.dispatch(fetchMovieDetails(clickedMovie));
            this.props.dispatch(fetchRecon(clickedMovie));
            this.props.dispatch(fetchActors(clickedMovie));
            this.props.dispatch(fetchMovieTrailer(clickedMovie));
        }
       
    }


    render() {
        return (
            <div className="movieDetail">
                <div className="movieDetail-container">
                    <img className="movieDetail-bg" src={`https://image.tmdb.org/t/p/original/${this.props.movieDetails.backdrop_path}`} alt={this.props.movieDetails.title}/>
                </div>
                <div className="main-details">
                    <DetailSummary data={this.props.movieDetails} castdata={this.props.movieActors} trailerdata={this.props.movieTrailer}/>
                    <Carousel title={"Recommended"} movies={this.props.moviesRecon} />
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    moviesRecon: state.app.moviesRecon,
    movieDetails: state.app.movieDetails,
    movieActors: state.app.movieActors,
    movieTrailer: state.app.movieTrailer
});

export default connect(mapStateToProps)(withRouter(MovieDetailPage));
