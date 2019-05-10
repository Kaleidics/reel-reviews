import React from 'react';
import './DetailSummary.css';
// import { Carousel } from '../Carousel/Carousel';

export default class DetailSummary extends React.Component {

    render() {
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
                </div>
                <div className="summary-inner-right">
                    <iframe className="movie-video" width="100%" height="100%"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY?modestbranding=1">
                    </iframe>
                </div>
                
            </div>
        )
    }
}