import React from "react";
import "./MovieBoardItem.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class MovieBoardItem extends React.Component {
    handleId = e => {
        let movieId = this.props.id;
        this.props.history.push(`/movie-detail?query=${movieId}`);
    };

    render() {
        const genres = this.props.genres;
        const genreList = genres.length;
        //genres is set to the redux store since every movie needs access to it, but is provided as on object on a separate endpoint by the TMDb API
        //and movies are given a key in reference to that genre object, so this gives me the associated value(genre) of the key, without repeated API calls
        function getGenreText(id) {
            for (let i = 0; i < genreList; i++) {
                // eslint-disable-next-line
                if (genres[i].id == id) {
                    return genres[i].name;
                }
            }
        }

        return (
            <div className="movieBoardItem" onClick={this.handleId}>
                <div className="movieBoard-desc">
                    <div className="inner-desc">
                        <h2>{this.props.data.title}</h2>
                        <p>
                            {getGenreText(this.props.data.genre_ids[0])} {this.props.data.genre_ids[1] ? `| ${getGenreText(this.props.data.genre_ids[1])}` : ""}
                        </p>
                        <p>{`${this.props.data.overview.substring(0, 200)}...`}</p>
                    </div>
                </div>
                <img className="inner-movieBoardItem" src={`https://image.tmdb.org/t/p/original${this.props.data.poster_path}`} alt={this.props.data.title} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genres: state.app.genres
});

export default connect(mapStateToProps)(withRouter(MovieBoardItem));
