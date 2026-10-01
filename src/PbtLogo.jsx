function PbtLogo({ src, alt }) {
  return <img className="pbt-logo-image" src={src} alt={alt} onError={(event) => { event.currentTarget.hidden = true }} />
}

export default PbtLogo