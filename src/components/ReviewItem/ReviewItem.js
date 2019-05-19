import React from 'react';
import './ReviewItem.css';
import CarouselItem from '../CarouselItem/CarouselItem';

export class ReviewItem extends React.Component {


    render() {
        return (
            <div className="review-container" id={this.props.id}>
               <div className="review-origin">
                   <CarouselItem data={this.props.data} id={this.props.id}/>
               </div>
               <div className="review-main">
                   <h3 className="review-title">"{this.props.data.reviewTitle}"</h3>
                   <p className="review-text">{this.props.data.reviewText}</p>
                    <p className="review-owner">- {this.props.data.reviewer.displayname}</p>
               </div>
               <div className="review-score-container">
                    <p className="review-score" style={{ background: (this.props.data.reviewScore >= 4) ? '#7AC27A' : (this.props.data.reviewScore <= 2) ? '#FF6060' : '#666' }} >{this.props.data.reviewScore}/5</p>
                    <div className="score-options">
                        <button className="score-option update">Edit</button>
                        <button className="score-option delete">Delete</button>
                    </div>
               </div>
            </div>
        )
    }
}