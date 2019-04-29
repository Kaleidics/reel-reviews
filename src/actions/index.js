import sleeper from '../sleeper';

export const LOADER_INCREMENT = 'LOADER_INCREMENT';
export const loaderIncrement = add => ({
    type: LOADER_INCREMENT,
});

export const LOADER_DECREMENT = 'LOADER_DECREMENT';
export const loaderDecrement = minus => ({
    type: LOADER_DECREMENT,
});


export const FETCH_PLAYING_SUCCESS = 'FETCH_PLAYING_SUCCESS';
export const fetchPlayingSuccess = playing => ({
    type: FETCH_PLAYING_SUCCESS,
    playing
});

export const fetchPlaying = () => dispatch => {
    dispatch(loaderIncrement());
    const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US&page=1';
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(playing => {
            dispatch(loaderDecrement());
            dispatch(fetchPlayingSuccess(playing.results));
        })
        .catch(err => console.log(err));
}

export const FETCH_UPCOMING_SUCCESS = 'FETCH_UPCOMING_SUCCESS';
export const fetchUpcomingSuccess = upcoming => ({
    type: FETCH_UPCOMING_SUCCESS,
    upcoming
});

export const fetchUpcoming = () => dispatch => {
    dispatch(loaderIncrement());
    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US&page=1';
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(upcoming => {
            dispatch(loaderDecrement());
            dispatch(fetchUpcomingSuccess(upcoming.results));
        })
        .catch(err => console.log(err));
}

export const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS';
export const fetchPopularSuccess = popular => ({
    type: FETCH_POPULAR_SUCCESS,
    popular
});

export const fetchPopular = () => dispatch => {
    dispatch(loaderIncrement());
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US&page=1";
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(popular => {
            dispatch(loaderDecrement());
            dispatch(fetchPopularSuccess(popular.results));
        })
        .catch(err => console.log(err));
}

export const FETCH_TOP_SUCCESS = 'FETCH_TOP_SUCCESS';
export const fetchTopSuccess = top => ({
    type: FETCH_TOP_SUCCESS,
    top
});

export const fetchTop = () => dispatch => {
    dispatch(loaderIncrement());
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US&page=1';
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(
            sleeper(3100)
        )
        .then(top => {
            dispatch(loaderDecrement());
            dispatch(fetchTopSuccess(top.results));
        })
        .catch(err => console.log(err));
}

export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const searchMovieSuccess = results => ({
    type: SEARCH_MOVIE_SUCCESS,
    results
});

export const searchMovie = () => dispatch => {
    dispatch(loaderIncrement());
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=20ab5eea604d1925caf8b70508fb639b&query=the+avengers'
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(
            sleeper(3100)
        )
        .then(results => {
            dispatch(loaderDecrement());
            dispatch(searchMovieSuccess(results.results));
        })
        .catch(err => console.log(err));
}