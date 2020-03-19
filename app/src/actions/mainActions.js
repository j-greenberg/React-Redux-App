import axios from 'axios';

export const FETCH_LYRICS_START = 'FETCH_LYRICS_START';
export const FETCH_LYRICS_SUCCESS = 'FETCH_LYRICS_SUCCESS';
export const FETCH_LYRICS_FAIL = 'FETCH_LYRICS_FAIL';

export const getLyrics = (search) => (dispatch, getState) => {
  dispatch({ type: FETCH_LYRICS_START });
  axios
    .get(`https://api.lyrics.ovh/v1/${search.artist}/${search.song}`)
    .then(res => {
        console.log(res.data.lyrics)
        dispatch({ type: FETCH_LYRICS_SUCCESS, payload: res.data.lyrics })
    })
    .catch(err => dispatch({ type: FETCH_LYRICS_FAIL, payload: err }));
};
