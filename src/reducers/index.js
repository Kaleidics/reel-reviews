import { FETCH_UPCOMING_SUCCESS, FETCH_TOP_SUCCESS } from "../actions";

const initialState = {
    movies: []
};

export const upcomingReducer = (state=initialState, action) => {
    if (action.type === FETCH_UPCOMING_SUCCESS) {
        return Object.assign({}, state, {
            movies: action.upcoming
        });
    }

    if (action.type === FETCH_TOP_SUCCESS) {
        return Object.assign({}, state, {
            movies: action.top
        });
    }
    return state;
}