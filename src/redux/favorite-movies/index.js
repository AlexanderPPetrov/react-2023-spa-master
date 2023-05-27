import actionTypes from './action-types'

export function favoriteMovies(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE_MOVIE:
      return [...state, action.payload]
    case actionTypes.REMOVE_FAVORITE_MOVIE:
      return state.filter(movie => movie.id !== action.payload)
    case actionTypes.SET_FAVORITE_MOVIES:
      return [...action.payload]
    default:
      return state
  }
}
