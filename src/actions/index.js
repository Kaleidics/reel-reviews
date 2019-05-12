import sleeper from '../sleeper';

export const LOADER_INCREMENT = 'LOADER_INCREMENT';
export const loaderIncrement = add => ({
    type: LOADER_INCREMENT,
});

export const LOADER_DECREMENT = 'LOADER_DECREMENT';
export const loaderDecrement = minus => ({
    type: LOADER_DECREMENT,
});

export const SET_GENRES_SUCCESS = 'SET_GENRES_SUCCESS';
export const setGenresSuccess = genres => ({
    type: SET_GENRES_SUCCESS,
    genres
});

export const setGenres = () => dispatch => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US";
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(genres => {
            dispatch(setGenresSuccess(genres.genres));
        })
        .catch(err => console.log(err));
}

export const FETCH_PLAYING_SUCCESS = 'FETCH_PLAYING_SUCCESS';
export const fetchPlayingSuccess = playing => ({
    type: FETCH_PLAYING_SUCCESS,
    playing
});

export const fetchPlaying = () => dispatch => {
    console.log('fetchplaying is set');
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
            console.log('fetchplaying unset')
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
    console.log('fetchupcoming is set');
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
            console.log('fetchupcoming is unset')
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
    console.log('fetchpopular is set')
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
            console.log('fetchpopular is unset')
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
    console.log('top is set')
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US&page=1';
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(
            sleeper(2500)
        )
        .then(top => {
            dispatch(loaderDecrement());
            console.log('top is unset')
            dispatch(fetchTopSuccess(top.results));
        })
        .catch(err => console.log(err));
}


export const FETCH_RECON_SUCCESS = 'FETCH_RECON_SUCCESS';
export const fetchReconSuccess = recon => ({
    type: FETCH_RECON_SUCCESS,
    recon
});

export const fetchRecon = (id) => dispatch => {
    dispatch(loaderIncrement());
    console.log('recon is set')
    let iD = encodeURIComponent(id);
    const url = `https://api.themoviedb.org/3/movie/${iD}/recommendations?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US&page=1`;
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(
            sleeper(1000)
        )
        .then(recon => {
            
            dispatch(fetchReconSuccess(recon.results));
            dispatch(loaderDecrement());
            console.log('recon is unset')
            
        })
        .catch(err => console.log(err));
}

export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS';
export const fetchMovieDetailsSuccess = details => ({
    type: FETCH_MOVIE_DETAILS_SUCCESS,
    details
});

export const fetchMovieDetails = (id) => dispatch => {
    dispatch(loaderIncrement());
    console.log('details is set')
    let iD = encodeURIComponent(id);
    const url = `https://api.themoviedb.org/3/movie/${iD}?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US`;
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status.Text);
            }
            return res.json()
        })
        .then(
            sleeper(1500)
        )
        .then (details => {
            dispatch(fetchMovieDetailsSuccess(details));
            // dispatch(loaderDecrement());
            console.log('details is unset')
        })
        .then(
            sleeper(1000)
        )
        .then ( () => {
            dispatch(loaderDecrement())
            console.log('loader is unset');
        })
        .catch(err => console.log(err));
}

export const FETCH_ACTORS_SUCCESS = 'FETCH_ACTORS_SUCCESS';
export const fetchActorsSucces = actors => ({
    type: FETCH_ACTORS_SUCCESS,
    actors
});

export const fetchActors = (id) => dispatch => {
    dispatch(loaderIncrement());
    console.log('actors is set');
    let iD = encodeURIComponent(id);

    const url = `https://api.themoviedb.org/3/movie/${iD}/credits?api_key=20ab5eea604d1925caf8b70508fb639b`;
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status.Text);
            }
            return res.json()
        })
        .then (
            sleeper(1000)
        )
        .then(actors => {
            dispatch(fetchActorsSucces(actors.cast));
            dispatch(loaderDecrement());
        })
        .catch( err => console.log(err))
}

export const FETCH_TRAILER_SUCCESS = 'FETCH_TRAILER_SUCCESS';
export const fetchTrailerSuccess = trailer => ({
    type: FETCH_TRAILER_SUCCESS,
    trailer
});

export const fetchMovieTrailer = (id) => dispatch => {
    dispatch(loaderIncrement());
    console.log('trailers is set');
    let iD = encodeURIComponent(id);

    const url = `https://api.themoviedb.org/3/movie/${iD}/videos?api_key=20ab5eea604d1925caf8b70508fb639b&language=en-US
`;
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status.Text);
            }
            return res.json()
        })
        .then(
            sleeper(1000)
        )
        .then(trailer => {
            dispatch(fetchTrailerSuccess(trailer.results[0]));
            dispatch(loaderDecrement());
        })
        .catch(err => console.log(err))
}

export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const searchMovieSuccess = results => ({
    type: SEARCH_MOVIE_SUCCESS,
    results
});

export const searchMovie = (searchTerm) => (dispatch) => {
    dispatch(loaderIncrement());
    console.log('searchmovie is set')
    let search = encodeURIComponent(searchTerm);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=20ab5eea604d1925caf8b70508fb639b&query=${search}`;
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(results => {
            console.log('loader');
            dispatch(searchMovieSuccess(results.results));
        })
        .then(() => {
            dispatch(loaderDecrement())
            console.log('searchmovie is unset')
        }
        )
        .catch(err => console.log(err));
};

export const loaderHandler = () => dispatch => {
    dispatch(loaderDecrement());    
};

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const setSearchTerm = (searchTerm) => ({
    type: SET_SEARCH_TERM,
    searchTerm
});

export const SET_RECON_ID = 'SET_RECON_ID';
export const setReconId = (reconId) => ({
    type: SET_RECON_ID,
    reconId
})