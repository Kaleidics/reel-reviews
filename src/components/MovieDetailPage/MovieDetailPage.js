import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from '../Carousel/Carousel';
import { withRouter } from 'react-router-dom';
import { setReconId, fetchRecon, fetchMovieDetails, fetchActors, fetchReviewData } from '../../actions/index';
import ReviewContainer from '../ReviewContainer/ReviewContainer';
import DetailSummary from '../DetailSummary/DetailSummary';
import CreatePost from '../CreatePost/CreatePost';
import './MovieDetailPage.css';

//fetchMovieTrailer is a breaking feature needs a revisit
// import { fetchMovieTrailer } from '../../actions/index';

export class MovieDetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisibility: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        window.onpopstate = () => {
            const params = (new URL(document.location)).searchParams;
            const clickedMovie = params.get("query");

            if (clickedMovie) {
                console.log('triggered popstate')
                this.props.dispatch(setReconId(clickedMovie));
                this.props.dispatch(fetchMovieDetails(clickedMovie));
                this.props.dispatch(fetchRecon(clickedMovie));
                this.props.dispatch(fetchActors(clickedMovie));
                this.props.dispatch(fetchReviewData(clickedMovie));
                // this.props.dispatch(fetchMovieTrailer(clickedMovie));
            }
        }

        const params = (new URL(document.location)).searchParams;
        const clickedMovie = params.get("query");

        if (clickedMovie) {
            this.props.dispatch(setReconId(clickedMovie));
            this.props.dispatch(fetchMovieDetails(clickedMovie));
            this.props.dispatch(fetchRecon(clickedMovie));
            this.props.dispatch(fetchActors(clickedMovie));
            this.props.dispatch(fetchReviewData(clickedMovie));
            // this.props.dispatch(fetchMovieTrailer(clickedMovie));
        }
    }

    handleModal = () => {
        console.log('triggered modal');

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
        } 
        else {
            alert('Please log in to use this feature.')
        }
    }



    render() {

        let reviewPost;
        if (this.state.modalVisibility === true) {
            reviewPost = <CreatePost data={this.props.movieDetails} handleFn={this.handleModal} />
        }

        return (
            <div className="movieDetail">
                <div className="movieDetail-container">
                    <img className="movieDetail-bg" src={`https://image.tmdb.org/t/p/original/${this.props.movieDetails.backdrop_path}`} alt={this.props.movieDetails.title}/>
                </div>
                <div className="main-details">
                    <DetailSummary data={this.props.movieDetails} castdata={this.props.movieActors} reviewData={this.props.reviewData} trailerdata={this.props.movieTrailer}/>
                    <hr className="main-details-divider" />
                </div>
                <div className="review-header">
                    <h3 className="reviews-title">{this.props.reviewData.length !== 0 ? "Reviews" : "No Reviews"}</h3>
                    <button className="add-review" onClick={this.handleModal}>Rate It</button>
                    {reviewPost}
                </div>
                <ReviewContainer />
                <Carousel title={"Recommended"} movies={this.props.moviesRecon} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authState: state.app.authState,
    isLoading: state.app.isLoading,
    moviesRecon: state.app.moviesRecon,
    movieDetails: state.app.movieDetails,
    movieActors: state.app.movieActors,
    movieTrailer: state.app.movieTrailer,
    reviewData: state.app.reviewData
});

export default connect(mapStateToProps)(withRouter(MovieDetailPage));
