import { SET_SEARCH_TERM, LOADER_INCREMENT, LOADER_DECREMENT, FETCH_PLAYING_SUCCESS, FETCH_POPULAR_SUCCESS,FETCH_UPCOMING_SUCCESS, FETCH_TOP_SUCCESS, SEARCH_MOVIE_SUCCESS, SET_GENRES_SUCCESS, FETCH_RECON_SUCCESS } from "../actions";

const initialState = {
    isLoading: 0,
    genres: [],
    moviesPlaying: [],
    moviesPopular: [],
    moviesUpcoming: [],
    moviesTop: [],
    movieSearch:[],
    searchTerm: "",
    moviesRecon: []
};

export const Reducer = (state=initialState, action) => {

    if (action.type === FETCH_RECON_SUCCESS) {
        return Object.assign({}, state, {
            moviesRecon: action.recon
        });
    }

    if (action.type === SET_SEARCH_TERM) {
        return Object.assign({}, state, {
            searchTerm: action.searchTerm
        });
    }

    if (action.type === LOADER_INCREMENT ) {
        return Object.assign({}, state, {
            isLoading: state.isLoading + 1
        });
    }

    if (action.type === LOADER_DECREMENT) {
        return Object.assign({}, state, {
            isLoading: state.isLoading -1
        });
    }

    if (action.type === SET_GENRES_SUCCESS) {
        return Object.assign({}, state, {
            genres: action.genres
        })
    }
    if (action.type === FETCH_PLAYING_SUCCESS) {
        return Object.assign({}, state, {
            moviesPlaying: action.playing
        })
    }

    if (action.type === FETCH_UPCOMING_SUCCESS) {
        return Object.assign({}, state, {
            moviesUpcoming: action.upcoming,
        });
    }

    if (action.type === FETCH_TOP_SUCCESS) {
        return Object.assign({}, state, {
            moviesTop: action.top,
        });
    }

    if (action.type === FETCH_POPULAR_SUCCESS) {
        return Object.assign({}, state, {
            moviesPopular: action.popular,
        });
    }

    if (action.type === SEARCH_MOVIE_SUCCESS) {
        return Object.assign({}, state, {
            movieSearch: action.results
        });
    }
    return state;
}