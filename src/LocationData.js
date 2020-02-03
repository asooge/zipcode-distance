import React from 'react'

const LocationData = (props) => {

    return (
        <div>
            <h2>{props.info.LocationText}</h2>
            <p>Population: {props.info.EstimatedPopulation || 'unknown'}</p>
            <p>Latitude: {props.info.Lat}, Longitude:{props.info.Long}</p>
        </div>
    )
}

export default LocationData