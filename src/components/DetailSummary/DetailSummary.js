import React from 'react';
import './DetailSummary.css';
import { Cast } from '../Cast/Cast'
export default class DetailSummary extends React.Component {

    render() {

        let splash = <img className="splash"  src={`https://image.tmdb.org/t/p/original/${this.props.data.poster_path}`} alt={this.props.data.title} />

        if (this.props.trailerdata) {
            splash = <iframe className="movie-video" width="100%" height="100%"
                src={`https://www.youtube.com/embed/${this.props.trailerdata.key}?modestbranding=1`}>
            </iframe>
        }

        return (
            <div className="summary-container">
                <div className="summary-inner-left">
                    <h2 className="summary-title">{this.props.data.title}</h2>
                    <div className="summary-details">
                        <ul className="summary-details-left">
                            <li className="release">Release Date: {this.props.data.release_date}</li>
                            <li className="original-lang">Original Language: <span>{this.props.data.original_language}</span></li>
                            <li className="runtime">Runtime: {this.props.data.runtime}mins</li>
                        </ul>
                        <ul className="summary-details-right">
                            <li className="rr-score"><span>RR Score:</span><span>N/A</span></li>
                            <li className="imdb-score"><span>TMDB Score:</span><span>{this.props.data.vote_average}</span></li>
                        </ul>
                    </div>
                    <div className="summary-paragraph-container">
                    <h3>Summary</h3>
                        <p>{this.props.data.overview}</p>
                    </div>   
                    <Cast title={"Starring"} cast={this.props.castdata} />
                </div>
                <div className="summary-inner-right">
                    {splash}
                </div>
            </div>
        )
    }
}