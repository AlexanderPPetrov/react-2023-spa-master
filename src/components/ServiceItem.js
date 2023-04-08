

function ServiceItem({ icon, title, description}) {
  return (
     <div className="card">
            <div className="card-body d-flex flex-column align-items-center px-5">
              {icon}
              <h5 className="card-title text-truncate text-center mt-5">
                {title}
              </h5>
              <p className="card-text text-center">
                {description}
              </p>
            </div>
      </div>
  );
}

export default ServiceItem;