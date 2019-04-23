import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';

const data = {
  "results": [
    {
      "vote_count": 210,
      "id": 456740,
      "video": false,
      "vote_average": 5.2,
      "title": "Hellboy",
      "popularity": 420.975,
      "poster_path": "/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
      "original_language": "en",
      "original_title": "Hellboy",
      "genre_ids": [
        28,
        12,
        14
      ],
      "backdrop_path": "/5BkSkNtfrnTuKOtTaZhl8avn4wU.jpg",
      "adult": false,
      "overview": "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
      "release_date": "2019-04-10"
    },
    {
      "vote_count": 448,
      "id": 537915,
      "video": false,
      "vote_average": 6.5,
      "title": "After",
      "popularity": 330.327,
      "poster_path": "/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
      "original_language": "en",
      "original_title": "After",
      "genre_ids": [
        18,
        10749
      ],
      "backdrop_path": "/8lESY7UGpOsbL2caib9Qe4bOebF.jpg",
      "adult": false,
      "overview": "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.",
      "release_date": "2019-04-11"
    },
    {
      "vote_count": 64,
      "id": 299534,
      "video": false,
      "vote_average": 7,
      "title": "Avengers: Endgame",
      "popularity": 312.509,
      "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "genre_ids": [
        12,
        878,
        28
      ],
      "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "adult": false,
      "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      "release_date": "2019-04-24"
    }
  ]
  }

function App() {
  return (
    <Carousel data={data} />
  );
}

export default App;
