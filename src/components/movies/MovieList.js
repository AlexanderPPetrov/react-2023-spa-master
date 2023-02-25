import MovieListItem from "./MovieListItem"
import MovieListItemPlaceholder from "./MovieListItemPlaceholder"
import MovieGridItem from "./MovieGridItem"
import { useMovieContext } from '../../context/MoviesContext'

function MovieList({ movies }) {

    const { listView, discoverMovieLoading } = useMovieContext()
    const dummyMovies = [...Array(21).keys()].slice(1)

    function getMovieItemList() {

        if(discoverMovieLoading) {
            return dummyMovies.map(dummyMovie => {
                return <MovieListItemPlaceholder key={dummyMovie}/>
            })
        }
      
        if(!movies.length && !discoverMovieLoading) {
            return <div className="alert alert-dark" role="alert">
            No results
          </div>
        }
        return movies.map(movie => {
            if(listView) {
                return <MovieListItem key={movie.id} movie={movie}/>
            }
            return <MovieGridItem key={movie.id} movie={movie}/>
        })
    }

    return <div className={listView ? '' : 'row'}>
        {getMovieItemList()}
    </div>
}
export default MovieList