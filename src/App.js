import React from 'react';
import {Carousel} from './components/Carousel/Carousel';
import MovieBoard from './components/MovieBoard/MovieBoard';
import Loader from './components/Loader/Loader';
import { connect } from 'react-redux';
import { fetchPlaying, fetchUpcoming, fetchPopular, fetchTop } from './actions';
import './App.css';

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPlaying());
    this.props.dispatch(fetchUpcoming());
    this.props.dispatch(fetchPopular());
    this.props.dispatch(fetchTop());
  }

  
  render(){
    let loader;
    if (this.props.isLoading > 0) {
      loader = <Loader />
    }

    return (
      <div className="container">
        {loader}
        <MovieBoard movies={this.props.moviesPopular} />
        <Carousel title={"Now Playing"} movies={this.props.moviesPlaying} />
        <Carousel title={"Upcoming"} movies={this.props.moviesUpcoming} />
        <Carousel title={"Popular"} movies={this.props.moviesPopular} />
        <Carousel title={"Top Rated"} movies={this.props.moviesTop} />
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

export default connect(mapStateToProps)(App);

