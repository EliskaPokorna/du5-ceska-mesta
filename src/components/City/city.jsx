import "./city.css"

export const City = ({name, population, area, district, photo}) => {
    return (
      <div className="city-card">
        <img className="city-photo" src={photo} alt={`Foto města ${name}`} />
        <div className="city-info">
          <h2 className="city-name">{name}</h2>
          <p className="city-population"><strong>Počet obyvatel:</strong> {population}</p>
          <p className="city-area"><strong>Rozloha:</strong> {area} km²</p>
          <p className="city-district"><strong>Okres:</strong> {district}</p>
        </div> 
      </div>  
    )
  }