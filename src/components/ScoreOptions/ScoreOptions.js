import React from 'react';


export default class ScoreOptions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            deleteVisibility: "delete-confirmation",
        }

    }

    handleDeleteFn = () => {
        console.log('here', this.props.id)
        console.log(this.props);
        this.setState({
            deleteVisibility: "delete-confirmation"
        });
        this.props.deleteFn();
    }

    render() {

        return(
            <div className="score-options">
                <button className="score-option update">Edit</button>
                <button className="score-option delete" onClick={() => this.setState({ deleteVisibility: "delete-confirmation delete-unhide" })}>Delete</button>
                <div className={this.state.deleteVisibility}>
                    <p>Are you sure?</p>
                    <p className="delete-confirmation-yes" onClick={this.handleDeleteFn}>Yes</p>
                    <p className="delete-confirmation-no" onClick={() => this.setState({ deleteVisibility: "delete-confirmation" })}>No</p>
                </div>
            </div> 
        )
    }
}