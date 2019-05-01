import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import LandingPage from './components/LandingPage/LandingPage';
import SearchPage from './components/SearchPage/SearchPage';
import './App.css';
import NavBar from './components/NavBar/NavBar';

export class App extends React.Component {

  render(){
    let loader;
    if (this.props.isLoading > 0) {
      loader = <Loader />
    }

    return (
      <BrowserRouter>
      <div className="outer-container">
        {loader}
        <NavBar />
       <Route exact path="/" component={LandingPage} />
       <Route path="/search" component={SearchPage} />
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
});

export default connect(mapStateToProps)(App);

