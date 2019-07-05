import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MovieBoardItem from "../MovieBoardItem/MovieBoardItem";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./MovieBoard.css";
import { heroPoster } from "./heroPoster";

export class MovieBoard extends React.Component {
    render() {
        //Picking on the top 4 movies to display
        const movieBoardItems = this.props.movies.slice(0, 4).map((item, index) => {
            return <MovieBoardItem data={item} index={index} key={this.props.movies[index].id} id={this.props.movies[index].id} />;
        });

        //Only showing the newest two reviews
        const allReviews = this.props.allReviews.slice(0, 2).map((item, index) => {
            return <ReviewItem data={item} index={index} key={this.props.allReviews[index]._id} id={this.props.allReviews[index]._id} />;
        });

        return (
            <div className="outer-MovieBoard">
                <div className="topMid">
                    <div className="title-section">
                        <h1>Reel Reviews</h1>
                        <p>Browse and rate the latest and greatest movies.</p>
                        <button>
                            <Link class="button" to="/login">{this.props.authState === true ? "Welcome Back!" : "Get Started"}</Link>
                        </button>
                    </div>
                    <MovieBoardItem data={heroPoster} index={0} key={heroPoster.id} id={heroPoster.id} />
                </div>
                <div className="bot">
                    <div className="bot-left">
                        <div className="bLeft">{movieBoardItems[1]}</div>
                        <div className="bMid">{movieBoardItems[2]}</div>
                        <div className="bRight">{movieBoardItems[3]}</div>
                    </div>
                    <div className="bot-right">
                        <h2>LATEST REVIEWS</h2>
                        {allReviews}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    authState: state.app.authState,
    allReviews: state.app.allReviews
});

export default connect(mapStateToProps)(MovieBoard);
