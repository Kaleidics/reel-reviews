import React from 'react';
import MovieBoardItem from '../MovieBoardItem/MovieBoardItem';
import './MovieBoard.css';

export default class MovieBoard extends React.Component {
    render() {

        const movieBoardItems = this.props.movies.slice(0,4).map((item, index ) => {
            return <MovieBoardItem data={item} index={index} key={this.props.movies[index].id} />
        });
        return (
            <div className="outer-MovieBoard">
                <div className="topMid">{movieBoardItems[0]}</div>
                <div className="bot">
                    <div className="bLeft">{movieBoardItems[1]}</div>
                    <div className="bMid">{movieBoardItems[2]}</div>
                    <div className="bRight">{movieBoardItems[3]}</div>
                </div>
               
            </div>
        )
    }
}