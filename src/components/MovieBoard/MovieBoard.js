import React from 'react';
import MovieBoardItem from '../MovieBoardItem/MovieBoardItem';
import { Link } from 'react-router-dom';
import './MovieBoard.css';

export default class MovieBoard extends React.Component {
    render() {

        const movieBoardItems = this.props.movies.slice(4,13).map((item, index ) => {
            return <MovieBoardItem data={item} index={index} key={this.props.movies[index].id} />
        });
        
        return (
            <div className="outer-MovieBoard">
                <div className="topMid">
                <div className="title-section">
                    <h2>Reel Reviews</h2>
                    <p>Browse and rate the latest and greatest movies.</p>
                    <Link to="/search"><button>Get Started</button></Link>
                </div>
                {movieBoardItems[2]}
                </div>
                <div className="bot">
                    <div className="bLeft">{movieBoardItems[6]}</div>
                    <div className="bMid">{movieBoardItems[4]}</div>
                    <div className="bRight">{movieBoardItems[7]}</div>
                </div>
               
            </div>
        )
    }
}