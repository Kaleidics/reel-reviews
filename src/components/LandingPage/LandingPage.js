import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from '../Carousel/Carousel';
import MovieBoard from '../MovieBoard/MovieBoard';
import { fetchPlaying, fetchUpcoming, fetchPopular, fetchTop } from '../../actions/index';
import './LandingPage.css';

export class LandingPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPlaying());
        this.props.dispatch(fetchUpcoming());
        this.props.dispatch(fetchPopular());
        this.props.dispatch(fetchTop());
    }


    render() {

        return (
            <div className="container">
                <MovieBoard movies={this.props.moviesPopular} />
                <div className="carousels">
                    <Carousel title={"Now Playing"} movies={this.props.moviesPlaying} />
                    <Carousel title={"Upcoming"} movies={this.props.moviesUpcoming} />
                    <Carousel title={"Popular"} movies={this.props.moviesPopular} />
                    <Carousel title={"Top Rated"} movies={this.props.moviesTop} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    moviesPlaying: state.moviesPlaying,
    moviesUpcoming: state.moviesUpcoming,
    moviesPopular: state.moviesPopular,
    moviesTop: state.moviesTop
});

export default connect(mapStateToProps)(LandingPage);

