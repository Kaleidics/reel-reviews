import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from '../Carousel/Carousel';
import { withRouter } from 'react-router-dom';
import { setReconId, fetchRecon, fetchMovieDetails } from '../../actions/index';

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
            }
           
            
        }
        const params = (new URL(document.location)).searchParams;
        const clickedMovie = params.get("query");
        console.log('here', clickedMovie);

        if(clickedMovie) {
            this.props.dispatch(setReconId(clickedMovie));
            this.props.dispatch(fetchMovieDetails(clickedMovie));
            this.props.dispatch(fetchRecon(clickedMovie));
        }
       
    }


    render() {
        return (
            <div className="movieDetail">
                <div className="movieDetail-container">
                    <img className="movieDetail-bg" src={`https://image.tmdb.org/t/p/original/${this.props.movieDetails.backdrop_path}`} alt={this.props.movieDetails.title}/>
                </div>
                <div className="main-details">
                    <DetailSummary data={this.props.movieDetails} />
                    <Carousel title={"Recommended"} movies={this.props.moviesRecon} />
                    <Carousel title={"Recommended"} movies={this.props.moviesRecon} />
                    <Carousel title={"Recommended"} movies={this.props.moviesRecon} />
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    moviesRecon: state.app.moviesRecon,
    movieDetails: state.app.movieDetails
});

export default connect(mapStateToProps)(withRouter(MovieDetailPage));
