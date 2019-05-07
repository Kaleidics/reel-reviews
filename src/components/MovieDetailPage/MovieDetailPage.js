import React from 'react';
import { connect } from 'react-redux';
import { fetchRecon } from '../../actions/index'

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
        // this.props.dispatch(fetchRecon());
    }


    render() {

        return (
            <div>
           
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    moviesRecon: state.app.moviesRecon
    
});

export default connect(mapStateToProps)(MovieDetailPage);

