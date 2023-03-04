import { BsFillStarFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { addFavoriteMovie, removeFavoriteMovie } from '../../redux/favorite-movies/actions'
function FavoriteButton({ movie }) {

    const dispatch = useDispatch();
    const favoriteMovies = useSelector(state => state.favoriteMovies)

    function isInFavorites() {
        return favoriteMovies.some(favoriteMovie => {
            return favoriteMovie.id === movie.id
        })
    }

    function toggleFavoriteMovie() {
        if(isInFavorites()) {
            dispatch(removeFavoriteMovie(movie.id))
            return
        }
        dispatch(addFavoriteMovie(movie))
    }

    return <BsFillStarFill style={{cursor: 'pointer'}}
                           size="1.5rem"
                           color={isInFavorites() ? '#ff8d00' : '#999999'}
                           onClick={toggleFavoriteMovie}/>
}

export default FavoriteButton