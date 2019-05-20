import React from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';



export default class ReviewContainer extends React.Component {

    render() {

        const movieReviews = this.props.data.map((item, index) => {
            return (
                <ReviewItem data={item} index={index} key={item._id} id={item._id} />
            );
        });

        return (
            <div>
                {movieReviews}
            </div>
        )
    }
}