import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import LandingPage from './components/LandingPage/LandingPage';
import SearchPage from './components/SearchPage/SearchPage';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import { setSearchTerm, setGenres } from './actions/index';
import { MovieDetailPage } from './components/MovieDetailPage/MovieDetailPage';


export class App extends React.Component {

  componentDidMount() {
    // window.scrollTo(0, 0);
    this.props.dispatch(setSearchTerm(''));
    this.props.dispatch(setGenres());
  }

  render(){
    let loader;
    if (this.props.isLoading > 0) {
      loader = <Loader />
    }

    return (
      <BrowserRouter>
      <div className="outer-container">
        {loader}
        <Route path="/" component={NavBar} />
       <Route exact path="/" component={LandingPage} />
       <Route path="/search" component={SearchPage} />
       <Route path="/movie-detail" component={MovieDetailPage} />
      </div>
      <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  genres: state.app.genres
});

export default connect(mapStateToProps)(App);

