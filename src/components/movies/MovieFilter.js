import { useState, useEffect } from 'react'
import constants from '../../constants'
import { useMovieContext } from '../../context/MoviesContext'
import axios from 'axios'
import { useDiscoverMovie } from '../../network/movies'

function MovieFilter() {
  const [checked, setChecked] = useState([])
  const [sortBy, setSortBy] = useState('popularity.desc')
  const { setMovies, setDiscoverMovieLoading } = useMovieContext()
  const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ]

  const { status, data, error, isFetching, refetch, isLoading } = useDiscoverMovie({
    sort_by: sortBy,
    with_genres: checked.join(','),
  })

  console.log(isFetching, isLoading)
  useEffect(() => {
    if (data) {
      setMovies(data?.results)
    }
  }, [data])
  useEffect(() => {
    setDiscoverMovieLoading(isLoading)
  }, [isLoading])

  function findMovies() {
    refetch()
  }

  function onCheckboxChange(id) {
    if (checked.includes(id)) {
      setChecked(checked.filter(checkboxId => checkboxId !== id))
      return
    }
    setChecked([...checked, id])
  }

  function onSortByChange(event) {
    setSortBy(event.target.value)
  }

  function getCheckboxes() {
    return genres.map(({ id, name }) => {
      return (
        <div key={id} className="mb-3 form-check">
          <input
            type="checkbox"
            checked={checked.includes(id)}
            onChange={() => onCheckboxChange(id)}
            className="form-check-input"
            id={id}
          />
          <label className="form-check-label" htmlFor={id}>
            {name}
          </label>
        </div>
      )
    })
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Filter movies</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Sort Results By
            </label>
            <select value={sortBy} onChange={onSortByChange} className="form-select">
              <option value="popularity.desc">Popularity Descending</option>
              <option value="popularity.asc">Popularity Ascending</option>
            </select>
          </div>
          {getCheckboxes()}
          <button type="button" onClick={findMovies} className="btn btn-primary">
            Find
          </button>
        </form>
      </div>
    </div>
  )
}

export default MovieFilter
