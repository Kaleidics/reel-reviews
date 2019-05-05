import React from 'react';
import MovieBoardItem from '../MovieBoardItem/MovieBoardItem';
import './MovieBoard.css';

export default class MovieBoard extends React.Component {
    render() {

        const movieBoardItems = this.props.movies.slice(4,8).map((item, index ) => {
            return <MovieBoardItem data={item} index={index} key={this.props.movies[index].id} />
        });
        return (
            <div className="outer-MovieBoard">
                <div className="topMid">{movieBoardItems[2]}</div>
                <div className="bot">
                    <div className="bLeft">{movieBoardItems[3]}</div>
                    <div className="bMid">{movieBoardItems[0]}</div>
                    <div className="bRight">{movieBoardItems[1]}</div>
                </div>
               
            </div>
        )
    }
}