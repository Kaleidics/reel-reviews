import React from 'react';

export class ReviewItem extends React.Component {

    render() {
        return (
            <div className="review-container">
               <p>{this.props.data.reviewTitle}</p>
            </div>
        )
    }
}