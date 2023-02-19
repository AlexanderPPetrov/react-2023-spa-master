function MovieListItem({ movie }) {
    return <div className="alert alert-success" role="alert">
    {movie?.title}
  </div>
}
export default MovieListItem