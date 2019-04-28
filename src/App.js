import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Landingpage from './components/LandingPage/LandingPage';
import './App.css';

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
       <Route exact path="/" component={Landingpage} />
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(App);

