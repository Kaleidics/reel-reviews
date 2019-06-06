import sleeper from '../sleeper';
import { deployAPI, localAPI } from '../config';

const API = deployAPI;

//Local Actions List
//LOADERS +1 and -1 if there are active async actions, while >0 render loader, while 0 do not render
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

//API Actions List
export const SET_GENRES_SUCCESS = 'SET_GENRES_SUCCESS';
export const setGenresSuccess = genres => ({
    type: SET_GENRES_SUCCESS,
    genres
});

export const setGenres = () => dispatch => {
    const url = API + "/3api/genres";

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
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

    const url = API + '/3api/playing';

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
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

    const url = API + '/3api/upcoming';

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
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

    const url = API + "/3api/popular";

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
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

    const url = API + '/3api/top';

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(sleeper(1000))
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
    const url = API + `/3api/recon/${iD}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(sleeper(1000))
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
    const url = API + `/3api/movie/${iD}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status.Text);
            }
            return res.json();
        })
        .then(details => {
            dispatch(fetchMovieDetailsSuccess(details));
        })
        .then(sleeper(1000))
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
    const url = API + `/3api/cast/${iD}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status.Text);
            }
            return res.json();
        })
        .then(actors => {
            dispatch(fetchActorsSucces(actors));
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

    let search = encodeURIComponent(searchTerm);
    const url = API + `/3api/search/${search}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(results => {
            dispatch(searchMovieSuccess(results));
        })
        .catch(err => console.log(err));
};

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = success => ({
    type: REGISTER_USER_SUCCESS,
    success
});

export const registerUser = credentials => dispatch => {
    const url = API + `/users/profile`;

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        //if succussful User persist to DB, automatically login the new User
        .then(response => {
            if (response.status === 201) {
                const loginCreds = {
                    username: credentials.username,
                    password: credentials.password
                }
                dispatch(loginUser(loginCreds));
            }
        // if no successful response return server response
            else {
                return response.json()
                    .then(response => {
                        alert(`${(response.location).toUpperCase()} ${(response.message).toUpperCase()}`)
                    })
                    .catch(err => console.log(err));
            }
            return response.json();
        })
        .catch(err => console.log(err));
}

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = success => ({
    type: LOGIN_USER_SUCCESS,
    success
});

export const loginUser = credentials => dispatch => {
    const url = API + `/auth/login`;

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
            const userId = response.userid;
            localStorage.setItem('localtoken', authToken);
            localStorage.setItem('authedUser', userId);
        })
        .then(response => {
            if (localStorage.getItem('localtoken')) {
                dispatch(loginUserSuccess(true));
            }
        })
        .catch(err => {
            alert('USERNAME OR PASSWORD DO NOT MATCH!');
        });
}

export const checkAuthState = credientials => dispatch => {
    if (localStorage.getItem('localtoken') && localStorage.getItem('authedUser')) {
        dispatch(loginUserSuccess(true));
    } else {
        dispatch(loginUserSuccess(false));
    }
}

export const logoutUser = credentials => dispatch => {
    if (localStorage.getItem('localtoken')) {
        localStorage.removeItem('localtoken');
        localStorage.removeItem('authedUser');
        dispatch(loginUserSuccess(false));
    }
}

export const FETCH_USER_REVIEW_SUCCESS = 'FETCH_USER_REVIEW_SUCCESS';
export const fetchUserReviewSuccess = reviews => ({
    type: FETCH_USER_REVIEW_SUCCESS,
    reviews
});

export const fetchUserReviews = reviews => dispatch => {
    const userId = localStorage.getItem('authedUser');
    const url = API + `/review/user/${userId}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(reviews => {
            dispatch(fetchUserReviewSuccess(reviews));
        })
        .catch(err => console.log(err));
}

//Handle dashboard rendering if user deletes a review 
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';
export const deleteReviewSuccess = deleted => ({
    type: DELETE_REVIEW_SUCCESS,
    deleted
});

//Handle movie page rendering if user deletes a review 
export const DELETE_REVIEW_MAIN_SUCCESS = 'DELETE_REVIEW_MAIN_SUCCESS';
export const deleteReviewMainSuccess = deleted => ({
    type: DELETE_REVIEW_MAIN_SUCCESS,
    deleted
});

//Handle landing page rendering if user deletes a review 
export const DELETE_REVIEW_ALL_SUCCESS = 'DELETE_REVIEW_ALL_SUCCESS';
export const deleteReviewAllSuccess = deleted => ({
    type: DELETE_REVIEW_ALL_SUCCESS,
    deleted
});

export const deleteReview = review => dispatch => {
    const localtoken = localStorage.getItem('localtoken');
    const url = API + `/review/delete/${review}`;

    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localtoken}`
        },
        method: 'DELETE'
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return 
        })
        .then(response => {
            dispatch(deleteReviewSuccess(review));
            dispatch(deleteReviewMainSuccess(review));
            dispatch(deleteReviewAllSuccess(review));
        })
        .catch(err => {
            console.error(err);
        });
}

export const FETCH_REVIEW_DATA_SUCCESS = 'FETCH_REVIEW_DATA_SUCCESS';
export const fetchReviewDataSuccess = reviews => ({
    type: FETCH_REVIEW_DATA_SUCCESS,
    reviews
});

//Fetch reviews for a single movie
export const fetchReviewData = movieId => dispatch => {
    const url = API + `/review/movie/${movieId}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(reviews => {
            dispatch(fetchReviewDataSuccess(reviews));
        })
        .catch(err => console.log(err));
}

//Fetch all reviews used mainly by landing page's latest reviews
export const FETCH_ALL_REVIEWS_SUCCESS = 'FETCH_ALL_REVIEWS_SUCCESS';
export const fetchAllReviewsSuccess = reviews => ({
    type: FETCH_ALL_REVIEWS_SUCCESS,
    reviews
});

export const fetchAllReviews = () => dispatch => {
    const url = API + `/review/all`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(reviews => {
            dispatch(fetchAllReviewsSuccess(reviews));
        })
        .catch(err => console.log(err));
}

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const createPostSuccess = review => ({
    type: CREATE_POST_SUCCESS,
    review
});

export const createPost = (review) => dispatch => {
    const movieId = review.movieId
    const url = API + `/review/${movieId}`;
    const localtoken = localStorage.getItem('localtoken');

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localtoken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(review => {
            dispatch(createPostSuccess(review));
        })
        .catch(err => console.log(err));
}