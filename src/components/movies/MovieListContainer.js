import MovieList from "./MovieList"
import ViewSwitch from "./ViewSwitch"
import { useMovieContext } from '../../context/MoviesContext'

function MovieListContainer() {
    const { movies } = useMovieContext()

    return <>
        <div className="d-flex align-items-center justify-content-between mb-3">
            <h5>Results</h5>
            <ViewSwitch/>
        </div>
        <MovieList movies={movies}/>
    </>
}
export default MovieListContainer