import MovieFilter from "../components/movies/MovieFilter"
import MovieListContainer from "../components/movies/MovieListContainer"

function HomePage() {

    return <div className="container">
    <div className="row">
        <div className="col-md-4">
            <MovieFilter/>
        </div>
        <div className="col-md-8">
            <MovieListContainer/>
        </div>
    </div>
</div>
}

export default HomePage