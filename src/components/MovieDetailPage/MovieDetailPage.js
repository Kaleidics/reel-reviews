import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from '../Carousel/Carousel';
import { withRouter } from 'react-router-dom';
import {fetchRecon} from '../../actions/index';


export class MovieDetailPage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);

        window.onpopstate = () => {
            const params = (new URL(document.location)).searchParams;
            const clickedMovie = params.get("query");
            console.log('here', clickedMovie);
        }
        const params = (new URL(document.location)).searchParams;
        const movieId = params.get("query");
        console.log('here', movieId);
        
        // this.props.dispatch(fetchRecon(movieId));
    }


    render() {
        console.log('movie detail', this.props.moviesRecon)
        return (
            <div>
                <Carousel title={"Recommended"} movies={this.props.moviesRecon} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    moviesRecon: state.app.recon
    
});

export default connect(mapStateToProps)(withRouter(MovieDetailPage));

