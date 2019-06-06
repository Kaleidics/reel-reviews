import React from "react";
import { connect } from "react-redux";
import { Carousel } from "../Carousel/Carousel";
import { withRouter } from "react-router-dom";
import { setReconId, fetchRecon, fetchMovieDetails, fetchActors, fetchReviewData } from "../../actions/index";
import ReviewContainer from "../ReviewContainer/ReviewContainer";
import DetailSummary from "../DetailSummary/DetailSummary";
import CreatePost from "../CreatePost/CreatePost";
import "./MovieDetailPage.css";


export class MovieDetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisibility: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        //Tricky way to handle router history/navigation
        //Listens to native browser navigation and url parameters to use as the arguments for routing to a specific page
        window.onpopstate = () => {
            const params = new URL(document.location).searchParams;
            const clickedMovie = params.get("query");

            if (clickedMovie) {
                this.props.dispatch(setReconId(clickedMovie));
                this.props.dispatch(fetchMovieDetails(clickedMovie));
                this.props.dispatch(fetchRecon(clickedMovie));
                this.props.dispatch(fetchActors(clickedMovie));
                this.props.dispatch(fetchReviewData(clickedMovie));
            }
        };

        const params = new URL(document.location).searchParams;
        const clickedMovie = params.get("query");

        if (clickedMovie) {
            this.props.dispatch(setReconId(clickedMovie));
            this.props.dispatch(fetchMovieDetails(clickedMovie));
            this.props.dispatch(fetchRecon(clickedMovie));
            this.props.dispatch(fetchActors(clickedMovie));
            this.props.dispatch(fetchReviewData(clickedMovie));
        }
    }

    handleModal = () => {
        if (this.props.authState) {
            if (this.state.modalVisibility === false) {
                this.setState({
                    modalVisibility: true
                });
            } else if (this.state.modalVisibility === true) {
                this.setState({
                    modalVisibility: false
                });
            }
        } else {
            alert("Please log in to use this feature.");
        }
    };

    render() {
        let reviewPost;
        if (this.state.modalVisibility === true) {
            reviewPost = <CreatePost data={this.props.movieDetails} handleFn={this.handleModal} />;
        }

        let background = "";
        if (this.props.movieDetails.backdrop_path) {
            background = <img className="movieDetail-bg" src={`https://image.tmdb.org/t/p/original/${this.props.movieDetails.backdrop_path}`} alt={this.props.movieDetails.title} />;
        }

        return (
            <main className="movieDetail" role="main">
                <div className="movieDetail-container">{background}</div>
                <div className="main-details">
                    <DetailSummary data={this.props.movieDetails} castdata={this.props.movieActors} reviewData={this.props.reviewData} />
                    <hr className="main-details-divider" />
                </div>
                <div className="review-header">
                    <h3 className="reviews-title">{this.props.reviewData.length !== 0 ? "Reviews" : "No Reviews"}</h3>
                    <button className="add-review" onClick={this.handleModal}>
                        Rate It
                    </button>
                    {reviewPost}
                </div>
                <ReviewContainer />
                <Carousel title={"Recommended"} movies={this.props.moviesRecon} axeRegion={"region1"} />
            </main>
        );
    }
}

const mapStateToProps = state => ({
    authState: state.app.authState,
    isLoading: state.app.isLoading,
    moviesRecon: state.app.moviesRecon,
    movieDetails: state.app.movieDetails,
    movieActors: state.app.movieActors,
    reviewData: state.app.reviewData
});

export default connect(mapStateToProps)(withRouter(MovieDetailPage));
