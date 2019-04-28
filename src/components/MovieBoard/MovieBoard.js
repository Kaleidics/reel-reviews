import React from 'react';
import MovieBoardItem from '../MovieBoardItem/MovieBoardItem';
import './MovieBoard.css';

export default class MovieBoard extends React.Component {
    render() {

        const movieBoardItems = this.props.movies.slice(0,2).map((item, index) => {
            return <MovieBoardItem data={item} index={index} />
        })
        return (
            <div className="outer-MovieBoard">
            <div className="opacity-layer"></div>
                {movieBoardItems}
            </div>
        )
    }
}