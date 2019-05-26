import React from 'react';
import { Cast } from '../Cast/Cast';
import './DetailSummary.css';
import placeholder from '../../assets/movie_placeholder.png';

export default class DetailSummary extends React.Component {

    render() {

        const movie = this.props.data;
        let splash = !movie.poster_path ? <img className="splash" src={placeholder} alt={"placeholder"} /> : <img className="splash" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />;

            //Computing average score for a movie, needs refactor and possibly export own file
             let score = 0;
             for (let i=0; i <this.props.reviewData.length; i++) {
                score = score + this.props.reviewData[i].reviewScore;
             }
             let avgScore = score/this.props.reviewData.length;

        return (
            <div className="summary-container">
                <div className="summary-inner-left">
                    <h2 className="summary-title">{movie.title}</h2>
                    <div className="summary-details">
                        <ul className="summary-details-left">
                            <li className="release">Original Title: {movie.original_title}</li>
                            <li className="original-lang">Original Language: <span>{movie.original_language}</span></li> 
                            <br />
                            <li className="runtime">Runtime: {movie.runtime}mins</li>
                            <li className="release">Release Date: {movie.release_date}</li>
                        </ul>
                        <ul className="summary-details-right">
                            <li className="rr-score"><span>RR Score:</span><span>{ avgScore ? `${avgScore.toFixed(1)} / 5` : 'N/A' }</span></li>
                            <li className="imdb-score"><span>TMDB Score:</span><span>{movie.vote_average} / 10</span></li>
                        </ul>
                    </div>
                    <div className="summary-paragraph-container">
                    <h3>Summary</h3>
                        <p>{movie.overview}</p>
                    </div>   
                    <Cast title={"Starring"} cast={this.props.castdata} />
                </div>
                <div className="summary-inner-right">
                    {splash}
                </div>
            </div>
        );
    }
}