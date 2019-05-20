import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/index';
import './CreatePost.css';


export class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieId: this.props.data.id,
            poster_path: this.props.data.poster_path,
            title: this.props.data.title,
            reviewTitle: "",
            reviewText: "",
            reviewScore:0
        }
    }

    handleCreate = e => {
        e.preventDefault();
        console.log('triggered handle create');
        console.log(this.state);
        console.log(this);
        this.props.createPost(this.state);
        this.props.handleFn();
    }

    render() {
        return (
            <div className="review-form-container">
                <form id="review-form" className="create-form" onSubmit={this.handleCreate}>
                    <label htmlFor="user-review-title">Title</label>
                    <input id="user-review-title" className="input-width" type="text" placeholder="" onChange={e => this.setState({ reviewTitle: e.target.value })} required />
                    <label htmlFor="user-review-text">Description</label>
                    <textarea form ="review-form" className="input-width" placeholder="" maxLength="700" cols="15" onChange={e => this.setState({ reviewText: e.target.value })} ></textarea>
                    <label htmlFor="user-review-rating">Rating</label>
                    <input id="user-review-rating" className="score-input" type="number" min="1" max="5" onChange={e => this.setState({ reviewScore: e.target.value })} required />
                    <button className="submit-create">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (review) => {
            dispatch(createPost(review));
        }
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);