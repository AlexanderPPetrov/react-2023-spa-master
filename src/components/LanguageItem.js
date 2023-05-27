function LanguageItem({ iso, title }) {
  return (
    <div className="d-flex align-items-center">
      <i className={`flag-icon flag-icon-sm ${iso}`}></i>
      <span className="mx-2">{title}</span>
    </div>
  )
}

export default LanguageItem
