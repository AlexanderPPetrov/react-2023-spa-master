function MovieListItemPlaceholder() {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="placeholder-glow h-100">
            <span className="placeholder col-12 h-100"></span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text placeholder-glow">
              <span className="placeholder col-4"></span>
            </p>
            <div className="placeholder-glow">
              <span className="placeholder col-12"></span>
              <span className="placeholder col-4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MovieListItemPlaceholder
