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
import  MovieDetailPage  from './components/MovieDetailPage/MovieDetailPage';
import AuthPage from './components/Auth/AuthPage';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import AuthTrue from './components/AuthTrue';


export class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(setSearchTerm(''));
    this.props.dispatch(setGenres());
  }

  render() {

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
        {/* <Route path="/login" component={AuthPage} /> */}
        <PrivateRoute authed={this.props.authState} path="/dashboard" component={Dashboard} />
        <AuthTrue authed={this.props.authState} path="/login" component={AuthPage} />
      </div>
      <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  genres: state.app.genres,
  authState: state.app.authState
});

export default connect(mapStateToProps)(App);

