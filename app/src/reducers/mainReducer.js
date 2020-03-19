import {
    FETCH_LYRICS_START,
    FETCH_LYRICS_SUCCESS,
    FETCH_LYRICS_FAIL
  } from '../actions/mainActions';

export const initialState = {
    lyrics: 'No lyrics yet! Run a search!', 
    error: '',
    isFetching: false
}; 

  function mainReducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_LYRICS_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_LYRICS_SUCCESS:
        return {
          ...state,
          lyrics: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_LYRICS_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default mainReducer;