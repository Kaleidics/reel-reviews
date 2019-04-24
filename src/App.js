import React from 'react';
import {Carousel} from './components/Carousel/Carousel';
import { connect } from 'react-redux';
import { fetchPlaying, fetchUpcoming, fetchPopular, fetchTop } from './actions';

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPlaying());
    this.props.dispatch(fetchUpcoming());
    this.props.dispatch(fetchPopular());
    this.props.dispatch(fetchTop());
  }

  render(){
    return (
      <div>
        <Carousel title={"Now Playing"} movies={this.props.moviesPlaying} />
        <Carousel title={"Upcoming"} movies={this.props.moviesUpcoming} />
        <Carousel title={"Popular"} movies={this.props.moviesPopular} />
        <Carousel title={"Top Rated"} movies={this.props.moviesTop} />
      </div>
     
    );
  }
}

const mapStateToProps = state => ({
  moviesPlaying: state.moviesPlaying,
  moviesUpcoming: state.moviesUpcoming,
  moviesPopular: state.moviesPopular,
  moviesTop: state.moviesTop
});

export default connect(mapStateToProps)(App);

