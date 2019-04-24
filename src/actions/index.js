export const FETCH_PLAYING_SUCCESS = 'FETCH_PLAYING_SUCCESS';
export const fetchPlayingSuccess = upcoming => ({
    type: FETCH_PLAYING_SUCCESS,
    upcoming
})

export const fetchPlaying = () => dispatch => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US&page=1';
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(playing => {
            dispatch(fetchPlayingSuccess(playing.results));
        })
        .catch(err => console.log(err));
}




export const FETCH_UPCOMING_SUCCESS = 'FETCH_UPCOMING_SUCCESS';
export const fetchUpcomingSuccess = upcoming => ({
    type: FETCH_UPCOMING_SUCCESS,
    upcoming
})

export const fetchUpcoming = () => dispatch => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US&page=1';
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(upcoming => {
            dispatch(fetchUpcomingSuccess(upcoming.results));
        })
        .catch(err => console.log(err));
}

export const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS';
export const fetchPopularSuccess = popular => ({
    type: FETCH_POPULAR_SUCCESS,
    popular
})

export const fetchPopular = () => dispatch => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US&page=1";
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(popular => {
            dispatch(fetchPopularSuccess(popular.results));
        })
        .catch(err => console.log(err));
}

export const FETCH_TOP_SUCCESS = 'FETCH_TOP_SUCCESS';
export const fetchTopSuccess = top => ({
    type: FETCH_TOP_SUCCESS,
    top
})

export const fetchTop = () => dispatch => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US&page=1';
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(top => {
            dispatch(fetchTopSuccess(top.results));
        })
        .catch(err => console.log(err));
}