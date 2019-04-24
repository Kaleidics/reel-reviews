import React from 'react';
import {Carousel} from './components/Carousel/Carousel';
import { connect } from 'react-redux';
import { fetchPopular, fetchUpcoming, fetchTop } from './actions';

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPopular());
    this.props.dispatch(fetchUpcoming());
    this.props.dispatch(fetchTop());
  }

  render(){
    return (
      <div>
        <Carousel title={"Upcoming"} movies={this.props.moviesUpcoming} />
        <Carousel title={"Popular"} movies={this.props.moviesPopular} />
        <Carousel title={"Top Rated"} movies={this.props.moviesTop} />
      </div>
     
    );
  }
  
}

const mapStateToProps = state => ({
  moviesUpcoming: state.moviesUpcoming,
  moviesPopular: state.moviesPopular,
  moviesTop: state.moviesTop
});

export default connect(mapStateToProps)(App);

