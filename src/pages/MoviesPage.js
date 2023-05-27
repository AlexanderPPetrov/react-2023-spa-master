import MovieFilter from '../components/movies/MovieFilter'
import MovieListContainer from '../components/movies/MovieListContainer'
import FavoriteMoviesToast from '../components/movies/FavoriteMoviesToast'
function MoviesPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <MovieFilter />
        </div>
        <div className="col-md-8">
          <MovieListContainer />
          <FavoriteMoviesToast />
        </div>
      </div>
    </div>
  )
}

export default MoviesPage
