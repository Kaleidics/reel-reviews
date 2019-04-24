import { FETCH_PLAYING_SUCCESS, FETCH_POPULAR_SUCCESS,FETCH_UPCOMING_SUCCESS, FETCH_TOP_SUCCESS } from "../actions";

const initialState = {
    moviesPlaying: [],
    moviesPopular: [],
    moviesUpcoming: [],
    moviesTop: []
};

export const upcomingReducer = (state=initialState, action) => {

    if (action.type === FETCH_PLAYING_SUCCESS) {
        return Object.assign
    }

    if (action.type === FETCH_UPCOMING_SUCCESS) {
        return Object.assign({}, state, {
            moviesUpcoming: action.upcoming,
            loading: true
        });
    }

    if (action.type === FETCH_TOP_SUCCESS) {
        return Object.assign({}, state, {
            moviesTop: action.top,
            loading: true
        });
    }

    if (action.type === FETCH_POPULAR_SUCCESS) {
        return Object.assign({}, state, {
            moviesPopular: action.popular,
            loading: false
        });
    }
    return state;
}