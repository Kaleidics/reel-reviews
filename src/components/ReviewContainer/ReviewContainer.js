import React from 'react';
import { connect } from 'react-redux';
import ReviewItem from '../ReviewItem/ReviewItem';

export class ReviewContainer extends React.Component {

    render() {

        const movieReviews = this.props.reviewData.map((item, index) => {
            return (
                <ReviewItem data={item} index={index} key={item._id} id={item._id} />
            );
        });

        return (
            <div>
                {movieReviews}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authState: state.app.authState,
    reviewData: state.app.reviewData
});

export default connect(mapStateToProps)(ReviewContainer);