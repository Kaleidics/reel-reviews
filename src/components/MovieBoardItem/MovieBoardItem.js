import React from 'react';
import './MovieBoardItem.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class MovieBoardItem extends React.Component {

    handleId = e => {
        let movieId = this.props.id
        this.props.history.push(`/movie-detail?query=${movieId}`);
    }

    render() {
        return (
            <div className="movieBoardItem" onClick={this.handleId}>
                <div className="movieBoard-desc">
                    <div className="inner-desc">
                        <h4>{this.props.data.title}</h4>
                        <p>{`${(this.props.data.overview).substring(0, 200)}...`}</p>
                    </div>
                </div>
                <img className="inner-movieBoardItem" src={`https://image.tmdb.org/t/p/original/${this.props.data.backdrop_path}`} alt={this.props.data.title} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genres: state.app.genres
});

export default connect(mapStateToProps)(withRouter(MovieBoardItem));