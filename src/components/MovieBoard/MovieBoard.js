import React from 'react';
import { Link } from 'react-router-dom';
import MovieBoardItem from '../MovieBoardItem/MovieBoardItem';
import './MovieBoard.css';

export default class MovieBoard extends React.Component {
    render() {

        const movieBoardItems = this.props.movies.slice(0,4).map((item, index ) => {
            return <MovieBoardItem data={item} index={index} key={this.props.movies[index].id} id={this.props.movies[index].id} />
        });
        
        return (
            <div className="outer-MovieBoard">
                <div className="topMid">
                <div className="title-section">
                    <h2>Reel Reviews</h2>
                    <p>Browse and rate the latest and greatest movies.</p>
                    <Link to="/search?query=avengers"><button>Get Started</button></Link>
                </div>
                    {movieBoardItems[0]}
                </div>
                <div className="bot">
                    <div className="bot-left">
                        <div className="bLeft">{movieBoardItems[1]}</div>
                        <div className="bMid">{movieBoardItems[2]}</div>
                        <div className="bRight">{movieBoardItems[3]}</div>
                    </div>
                    <div className="bot-right">
                        <h2>LATEST REVIEWS HERE</h2>
                    </div>
                </div>
               
            </div>
        )
    }
}