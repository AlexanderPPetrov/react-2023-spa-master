import React, { useContext } from 'react'
const moviesContext = {
  movies: [],
  setMovies: () => undefined,
  listView: true,
  setListView: () => undefined,
  discoverMovieLoading: true,
  setDiscoverMovieLoading: () => undefined,
}

export const MoviesContext = React.createContext(moviesContext)
export const useMovieContext = () => useContext(MoviesContext)
