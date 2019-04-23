import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import { fetchUpcoming, fetchTop } from './actions';

function App() {
  return (
    <div>
      <Carousel title={"Upcoming"} api={fetchUpcoming} />
      <Carousel title={"Top Rated"} api={fetchTop} />
    </div>
   
  );
}

export default App;
