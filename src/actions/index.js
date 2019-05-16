import sleeper from '../sleeper';

//Synchronous Actions List
export const LOADER_INCREMENT = 'LOADER_INCREMENT';
export const loaderIncrement = add => ({
    type: LOADER_INCREMENT,
});

export const LOADER_DECREMENT = 'LOADER_DECREMENT';
export const loaderDecrement = minus => ({
    type: LOADER_DECREMENT,
});

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const setSearchTerm = (searchTerm) => ({
    type: SET_SEARCH_TERM,
    searchTerm
});

export const SET_RECON_ID = 'SET_RECON_ID';
export const setReconId = (reconId) => ({
    type: SET_RECON_ID,
    reconId
});

//Asynchronous Actions List
export const SET_GENRES_SUCCESS = 'SET_GENRES_SUCCESS';
export const setGenresSuccess = genres => ({
    type: SET_GENRES_SUCCESS,
    genres
});

export const setGenres = () => dispatch => {
    const url = "https://reel-reviews-backend.herokuapp.com/3api/genres";

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(genres => {
            dispatch(setGenresSuccess(genres));
        })
        .catch(err => console.log(err));
}

export const FETCH_PLAYING_SUCCESS = 'FETCH_PLAYING_SUCCESS';
export const fetchPlayingSuccess = playing => ({
    type: FETCH_PLAYING_SUCCESS,
    playing
});

export const fetchPlaying = () => dispatch => {
    dispatch(loaderIncrement());

    const url = 'https://reel-reviews-backend.herokuapp.com/3api/playing';

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(playing => {
            dispatch(loaderDecrement());
            dispatch(fetchPlayingSuccess(playing));
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

    const url = 'https://reel-reviews-backend.herokuapp.com/3api/upcoming';

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(upcoming => {
            dispatch(loaderDecrement());
            dispatch(fetchUpcomingSuccess(upcoming));
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

    const url = "https://reel-reviews-backend.herokuapp.com/3api/popular";

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(popular => {
            dispatch(loaderDecrement());
            dispatch(fetchPopularSuccess(popular));
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

    const url = 'https://reel-reviews-backend.herokuapp.com/3api/top';

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(
            sleeper(1500)
        )
        .then(top => {
            dispatch(loaderDecrement());
            dispatch(fetchTopSuccess(top));
        })
        .catch(err => console.log(err));
}

export const FETCH_RECON_SUCCESS = 'FETCH_RECON_SUCCESS';
export const fetchReconSuccess = recon => ({
    type: FETCH_RECON_SUCCESS,
    recon
});

export const fetchRecon = id => dispatch => {
    dispatch(loaderIncrement());

    let iD = encodeURIComponent(id);
    const url = `https://reel-reviews-backend.herokuapp.com/3api/recon/${iD}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(
            sleeper(1500)
        )
        .then(recon => {
            dispatch(fetchReconSuccess(recon));
            dispatch(loaderDecrement());
        })
        .catch(err => console.log(err));
}

export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS';
export const fetchMovieDetailsSuccess = details => ({
    type: FETCH_MOVIE_DETAILS_SUCCESS,
    details
});

export const fetchMovieDetails = id => dispatch => {
    dispatch(loaderIncrement());

    let iD = encodeURIComponent(id);
    const url = `https://reel-reviews-backend.herokuapp.com/3api/movie/${iD}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status.Text);
            }
            return res.json()
        })
        .then(details => {
            dispatch(fetchMovieDetailsSuccess(details));
        })
        .then(
            sleeper(1500)
        )
        .then(
            dispatch(loaderDecrement())
        )
        .catch(err => console.log(err));
}

export const FETCH_ACTORS_SUCCESS = 'FETCH_ACTORS_SUCCESS';
export const fetchActorsSucces = actors => ({
    type: FETCH_ACTORS_SUCCESS,
    actors
});

export const fetchActors = id => dispatch => {
    dispatch(loaderIncrement());

    let iD = encodeURIComponent(id);
    const url = `https://reel-reviews-backend.herokuapp.com/3api/cast/${iD}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status.Text);
            }
            return res.json()
        })
        .then(actors => {
            dispatch(fetchActorsSucces(actors));
            dispatch(loaderDecrement());
        })
        .catch(err => console.log(err));
}

export const FETCH_TRAILER_SUCCESS = 'FETCH_TRAILER_SUCCESS';
export const fetchTrailerSuccess = trailer => ({
    type: FETCH_TRAILER_SUCCESS,
    trailer
});

export const fetchMovieTrailer = id => dispatch => {
    dispatch(loaderIncrement());

    let iD = encodeURIComponent(id);
    const url = `https://reel-reviews-backend.herokuapp.com/3api/trailer/${iD}`;
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
        .then(trailer => {
            dispatch(fetchTrailerSuccess(trailer));
            dispatch(loaderDecrement());
        })
        .catch(err => console.log(err));
}

export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const searchMovieSuccess = results => ({
    type: SEARCH_MOVIE_SUCCESS,
    results
});

export const searchMovie = searchTerm => dispatch => {
    // dispatch(loaderIncrement());

    let search = encodeURIComponent(searchTerm);
    const url = `https://reel-reviews-backend.herokuapp.com/3api/search/${search}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(results => {
            console.log('loader');
            dispatch(searchMovieSuccess(results));
        })
        .then(() => {
            // dispatch(loaderDecrement());
            console.log('searchmovie is unset')
        }
        )
        .catch(err => console.log(err));
};

export const loaderHandler = () => dispatch => {
    dispatch(loaderDecrement());
};

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = success => ({
    type: REGISTER_USER_SUCCESS,
    success
});
//needs a success handler for reducer
export const registerUser = credentials => dispatch => {
    const url = `https://reel-reviews-backend.herokuapp.com/users/profile`;

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.status === 201) {

            }

            else {
                return response.json()
                    .then(response => {
                        alert(`${(response.location).toUpperCase()} ${(response.message).toUpperCase()}`)
                    })
                    .catch(err => console.log(err));
            }
            return response.json()
        })
        .catch(err => console.log(err));
}

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = success => ({
    type: LOGIN_USER_SUCCESS,
    success
});

export const loginUser = credentials => dispatch => {
    const url = `https://reel-reviews-backend.herokuapp.com/auth/login`;

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => {
            const authToken = response.authtoken;
            localStorage.setItem('localtoken', authToken);
        })
        .then(response => {
            if (localStorage.getItem('localtoken')) {
                console.log('we got:', localStorage.getItem('localtoken'));
                // browserHistory.push('/dashboard');
                //dispatch the success to the trigger a reducer
                dispatch(loginUserSuccess(true));
            }
        })
        .catch(err => {
            alert('USERNAME OR PASSWORD DO NOT MATCH!');
        });
}