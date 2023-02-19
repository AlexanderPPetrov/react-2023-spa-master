import { useState } from "react"
import { MoviesContext } from "./MoviesContext"
function MoviesContextProvider ({children}) {
    const [movies, setMovies] = useState([])
    const context = {
        movies,
        setMovies,
    }
    return <MoviesContext.Provider value={context}>
        {children}
    </MoviesContext.Provider>
}

export default MoviesContextProvider