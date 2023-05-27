import actionTypes from './action-types'

export function addFavoriteMovie(value) {
  return {
    type: actionTypes.ADD_FAVORITE_MOVIE,
    payload: value,
  }
}

export function removeFavoriteMovie(value) {
  return {
    type: actionTypes.REMOVE_FAVORITE_MOVIE,
    payload: value,
  }
}

export function setFavoriteMovies(value) {
  return {
    type: actionTypes.SET_FAVORITE_MOVIES,
    payload: value,
  }
}
