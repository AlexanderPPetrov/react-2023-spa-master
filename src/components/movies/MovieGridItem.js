import constants from '../../constants'

function MovieGridItem({ movie }) {
    const imageSrc = `${constants.imageBaseUrl}${movie?.poster_path}`
    return <div className="col-md-4 my-1">
          <div className="card">
            <img src={imageSrc}
                  alt={movie?.title}
                  className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title text-truncate">{movie?.title}</h5>
              <div className="badge rounded-pill bg-primary ms-auto">
                {movie?.vote_average}
                </div>
              <p className="card-text">
                <small className="text-muted">{movie?.release_date}</small>
              </p>
              <p className="card-text text-truncate">{movie?.overview}</p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>
    </div>
    
}
export default MovieGridItem