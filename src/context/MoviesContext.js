import React, { useContext } from 'react'
const moviesContext = {
    movies: [],
    setMovies: () => undefined
}

export const MoviesContext = React.createContext(moviesContext)
export const useMovieContext = () => useContext(MoviesContext)