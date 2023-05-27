import React, { useState, useEffect } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setFavoriteMovies } from '../../redux/favorite-movies/actions'
import FavoriteButton from '../movies/FavoriteButton'

function FavoriteMoviesToast() {
  const [show, setShow] = useState(true)
  const favoriteMovies = useSelector(state => state.favoriteMovies)
  const dispatch = useDispatch()

  useEffect(() => {
    setShow(Boolean(favoriteMovies.length))
  }, [favoriteMovies])

  function getFavoriteMovies() {
    return favoriteMovies.map(movie => {
      return (
        <li key={movie.id} className="list-group-item d-flex align-items-center">
          <FavoriteButton movie={movie} />
          <span className="ms-2">{movie.title}</span>
        </li>
      )
    })
  }

  function clearAll() {
    dispatch(setFavoriteMovies([]))
  }

  return (
    <ToastContainer position="bottom-end" className="position-fixed p-3">
      <Toast show={show}>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Favorite Movies</strong>
          <button type="button" onClick={clearAll} className="btn btn-outline-danger btn-sm">
            Clear all
          </button>
        </Toast.Header>
        <Toast.Body>
          <ul className="list-group">{getFavoriteMovies()}</ul>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default FavoriteMoviesToast
