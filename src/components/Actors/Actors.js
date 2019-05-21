import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Actors.css'

export class Actors extends React.Component {

    handleId = e => {
        let actorId = this.props.id
        console.log("carousel item", actorId);

    }

    render() {
        if (this.props.data) {
            return (
                <div className="actor-Container" onClick={this.handleId}>
                    <img className="actor-picture" src={`https://image.tmdb.org/t/p/w500/${this.props.data.profile_path}`} alt={this.props.data.name} style={{ background: this.props.data.profile_path == null ? '#333' : 'transparent' }} />
                    <h4 className="character-name">{this.props.data.character}</h4>
                    <p className="actor-name">{this.props.data.name}</p>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    genres: state.app.genres
});

export default connect(mapStateToProps)(withRouter(Actors));
