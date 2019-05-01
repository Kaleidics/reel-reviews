import React from 'react';
import MovieBoardItem from '../MovieBoardItem/MovieBoardItem';
import './MovieBoard.css';

export default class MovieBoard extends React.Component {
    render() {

        const movieBoardItems = this.props.movies.slice(0,1).map((item, index, key ) => {
            return <MovieBoardItem data={item} index={index} key={this.props.movies[index].id} />
        });
        return (
            <div className="outer-MovieBoard">
            <div className="opacity-layer"></div>
                {movieBoardItems}
            </div>
        )
    }
}