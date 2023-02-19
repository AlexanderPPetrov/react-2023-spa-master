import MovieFilter from "../components/movies/MovieFilter"
import MovieList from "../components/movies/MovieList"

import { useMovieContext } from '../context/MoviesContext'
function HomePage() {

    const { movies } = useMovieContext()

    return <div className="container">
    <div className="row">
        <div className="col-md-4">
            <MovieFilter/>
        </div>
        <div className="col-md-8">
            <div>bbb</div>
            <MovieList movies={movies}/>
        </div>
    </div>
</div>
}

export default HomePage