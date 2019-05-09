import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from '../Carousel/Carousel';
import { withRouter } from 'react-router-dom';
import {fetchRecon} from '../../actions/index';
import { recommended } from './mock';
import { movieDetails } from './mockdetails';
import './MovieDetailPage.css';

export class MovieDetailPage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);

        window.onpopstate = () => {
            const params = (new URL(document.location)).searchParams;
            const clickedMovie = params.get("query");
            console.log('here', clickedMovie);
            this.props.dispatch(fetchRecon(movieId));
        }
        const params = (new URL(document.location)).searchParams;
        const movieId = params.get("query");
        console.log('here', movieId);
        
        this.props.dispatch(fetchRecon(movieId));
    }


    render() {
        console.log('movie detail', this.props.moviesRecon, this.props)
        return (
            <div className="movieDetail">
                <div className="movieDetail-container">
                    <img className="movieDetail-bg" src={`https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg`} />
                </div>
                <div className="main-details">
                    {/* <Carousel title={"Recommended"} movies={recommended} />
                    <Carousel title={"Recommended"} movies={recommended} />
                    <Carousel title={"Recommended"} movies={recommended} />
                    <Carousel title={"Recommended"} movies={recommended} />
                    <Carousel title={"Recommended"} movies={recommended} /> */}
                    <Carousel title={"Recommended"} movies={this.props.moviesRecon} />
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    moviesRecon: state.app.moviesRecon
});

export default connect(mapStateToProps)(withRouter(MovieDetailPage));
