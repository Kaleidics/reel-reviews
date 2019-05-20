import React from 'react';
import { connect } from 'react-redux';
import './ReviewItem.css';
import { deleteReview } from '../../actions/index';
import CarouselItem from '../CarouselItem/CarouselItem';
import ScoreOptions from '../ScoreOptions/ScoreOptions';
export class ReviewItem extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         deleteVisibility: "delete-confirmation",
    //     }

    // }

    handleDelete = () => {
        console.log('here',this.props.id)
        console.log(this.props);
        this.setState({
            deleteVisibility: "delete-confirmation"
        });
        this.props.deleteReview(this.props.id);
    }

    render() {

        console.log(this.props.id);
        return (
            <div className="review-container" id={this.props.id}>
               <div className="review-origin">
                   <CarouselItem data={this.props.data} id={this.props.data.movieId}/>
               </div>
               <div className="review-main">
                   <h3 className="review-title">"{this.props.data.reviewTitle}"</h3>
                   <p className="review-text">{this.props.data.reviewText}</p>
                    <p className="review-owner">- {this.props.data.reviewer.displayname}</p>
               </div>
               <div className="review-score-container">
                    <p className="review-score" style={{ background: (this.props.data.reviewScore >= 4) ? '#7AC27A' : (this.props.data.reviewScore <= 2) ? '#FF6060' : '#666' }} ><span className="review-editable">{this.props.data.reviewScore}</span>/5</p>
                    {/* <div className="score-options">
                        <button className="score-option update">Edit</button>
                        <button className="score-option delete" onClick={() => this.setState({deleteVisibility: "delete-confirmation delete-unhide"})}>Delete</button>
                        <div className={this.state.deleteVisibility}>
                            <p>Are you sure?</p>
                            <p className="delete-confirmation-yes" onClick={this.handleDelete}>Yes</p>
                            <p className="delete-confirmation-no" onClick={() => this.setState({ deleteVisibility: "delete-confirmation" })}>No</p>
                        </div>
                    </div> */}
                    <ScoreOptions deleteFn={this.handleDelete} id={this.props.id}/>
               </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    authState: state.app.authState
});


const mapDispatchToProps = (dispatch) => {
    return {
        deleteReview: (review) => {
            dispatch(deleteReview(review));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem);