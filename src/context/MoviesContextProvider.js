import { useState } from "react"
import { MoviesContext } from "./MoviesContext"
function MoviesContextProvider ({children}) {
    const [movies, setMovies] = useState([])
    const [discoverMovieLoading, setDiscoverMovieLoading] = useState(true)
    const [listView, setListView] = useState(true)
    const context = {
        movies,
        setMovies,
        listView,
        setListView,
        discoverMovieLoading,
        setDiscoverMovieLoading,
    }
    return <MoviesContext.Provider value={context}>
        {children}
    </MoviesContext.Provider>
}

export default MoviesContextProvider