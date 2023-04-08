import MovieList from "./MovieList"
import ViewSwitch from "./ViewSwitch"
import { useMovieContext } from '../../context/MoviesContext'

function MovieListContainer() {
    const { movies } = useMovieContext()

    return <>
        <div className="page-title d-flex align-items-center justify-content-between mt-3 mt-md-0 mb-3">
            <h5 className="mb-0">Results</h5>
            <ViewSwitch/>
        </div>
        <MovieList movies={movies}/>
    </>
}
export default MovieListContainer