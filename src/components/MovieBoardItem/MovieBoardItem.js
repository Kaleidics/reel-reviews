import React from 'react';
import './MovieBoardItem.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRecon, fetchMovieDetails } from '../../actions/index';

export class MovieBoardItem extends React.Component {

    handleId = e => {
        let movieId = this.props.id
        console.log("carousel item", movieId); //this is returning undefined
        // this.props.dispatch(fetchRecon(movieId));
        // this.props.dispatch(fetchMovieDetails(movieId));
        this.props.history.push(`/movie-detail?query=${movieId}`);
        // const params = (new URL(document.location)).searchParams;
        // const searchterm = params.get("query");
        // console.log('here', searchterm);

    }

    render() {
        return (
            <div className="movieBoardItem" onClick={this.handleId}>
                <div className="movieBoard-desc">
                    <div className="inner-desc">
                        <h4>{this.props.data.title}</h4>
                        <p>{this.props.data.overview}</p>
                    </div>

                </div>
                <img className="inner-movieBoardItem" src={`https://image.tmdb.org/t/p/original/${this.props.data.backdrop_path}`} alt={this.props.data.title} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    genres: state.app.genres
});

export default connect(mapStateToProps)(withRouter(MovieBoardItem));