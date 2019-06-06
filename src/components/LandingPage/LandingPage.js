import React from "react";
import { connect } from "react-redux";
import { Carousel } from "../Carousel/Carousel";
import MovieBoard from "../MovieBoard/MovieBoard";
import { fetchPlaying, fetchUpcoming, fetchPopular, fetchTop, fetchAllReviews } from "../../actions/index";
import "./LandingPage.css";

export class LandingPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.dispatch(fetchPlaying());
        this.props.dispatch(fetchUpcoming());
        this.props.dispatch(fetchPopular());
        this.props.dispatch(fetchTop());
        this.props.dispatch(fetchAllReviews());
    }

    render() {
        return (
            <div className="container" role="main">
                <MovieBoard movies={this.props.moviesPlaying} />
                <div className="carousels">
                    <Carousel title={"Now Playing"} movies={this.props.moviesPlaying} axeRegion={"region1"} />
                    <Carousel title={"Upcoming"} movies={this.props.moviesUpcoming} axeRegion={"region2"} />
                    <Carousel title={"Popular"} movies={this.props.moviesPopular} axeRegion={"region3"} />
                    <Carousel title={"Top Rated"} movies={this.props.moviesTop} axeRegion={"region4"} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    moviesPlaying: state.app.moviesPlaying,
    moviesUpcoming: state.app.moviesUpcoming,
    moviesPopular: state.app.moviesPopular,
    moviesTop: state.app.moviesTop
});

export default connect(mapStateToProps)(LandingPage);
