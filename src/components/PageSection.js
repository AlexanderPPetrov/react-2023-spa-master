
function PageSection({ title, description}) {
  return (
    <section className="py-5">
     <div className="card">
            <div className="card-body px-5">
              <h3 className="card-title text-truncate text-center">
                {title}
              </h3>
              <p className="card-text text-center">
                {description}
              </p>
            </div>
      </div>
    </section>
  );
}

export default PageSection;