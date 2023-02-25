import constants from '../../constants'

function MovieListItem({ movie }) {
    
    const imageSrc = `${constants.imageBaseUrl}${movie?.poster_path}`
    return <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={imageSrc}
             alt={movie?.title}
             className="img-fluid rounded-start"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{movie?.title}</h5>
<div className="badge rounded-pill bg-primary ms-auto">{movie?.title}</div>
          </div>
          <p className="card-text">
            <small className="text-muted">{movie?.release_date}</small>
          </p>
          <p className="card-text">{movie?.overview}</p>
        </div>
      </div>
    </div>
  </div>
}
export default MovieListItem