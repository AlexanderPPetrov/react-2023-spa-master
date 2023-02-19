import MovieListItem from "./MovieListItem"

function MovieList({ movies }) {

    function getMovieItemList() {
        return movies.map(movie => {
            return <MovieListItem 
                key={movie.id} 
                movie={movie}/>
        })
    }

    return <>
        {getMovieItemList()}
    </>
}
export default MovieList