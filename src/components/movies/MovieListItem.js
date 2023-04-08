import constants from '../../constants'
import FavoriteButton from './FavoriteButton'
import { isMobile } from "react-device-detect";

function MovieListItem({ movie }) {
    
    const imageSrc = `${constants.imageBaseUrl}${movie?.poster_path}`
    return <div className="card mb-3">
    <div className="row g-0">
      <div className="col-4">
        <img src={imageSrc}
             alt={movie?.title}
             className="img-fluid rounded-start"
        />
      </div>
      <div className="col-8">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <FavoriteButton movie={movie}/>
            <div className="flex-grow-1 d-flex align-items-center flex-column flex-md-row">
              <h5 className="card-title ms-2 mb-0">{movie?.title}</h5>
              <div className="badge rounded-pill bg-primary ms-auto">{movie?.title}</div>
            </div>
          </div>
          <p className="card-text mt-2">
            <small className="text-muted">{movie?.release_date}</small>
          </p>
          {!isMobile && <p className="card-text">{movie?.overview}</p>}
        </div>
      </div>
      {isMobile && <div className="card-body">
        <div className="col">
        <p className="card-text">{movie?.overview}</p>
        </div>
      </div>}
    </div>
  </div>
}
export default MovieListItem