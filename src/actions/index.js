
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
            dispatch(fetchUpcomingSuccess(upcoming))
        })
        .catch(err => console.log(err));
}