import React from "react";
import "./Dashboard.css";
import { connect } from "react-redux";
import { fetchUserReviews, checkAuthState } from "../../actions/index";
import ReviewItem from "../ReviewItem/ReviewItem";

export class Dashboard extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.dispatch(checkAuthState());
        this.props.dispatch(fetchUserReviews());
    }

    render() {
        const myReviews = this.props.userReviews.map((item, index) => {
            return <ReviewItem data={item} index={index} key={this.props.userReviews[index]._id} id={this.props.userReviews[index]._id} />;
        });

        return (
            <section className="dash-div" role="main">
                <div className="dash-review-container">
                    <h2 className="reviews-h2">Your Latest Reviews</h2>
                    {myReviews}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    userReviews: state.app.userReviews
});

export default connect(mapStateToProps)(Dashboard);
