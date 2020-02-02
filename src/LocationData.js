import React from 'react'

const LocationData = (props) => {

    return (
        <div>
            <h1>{props.info.LocationText}</h1>
            <p>Country: {props.info.Country || 'unknown'} </p>
            <p>Population: {props.info.EstimatedPopulation || 'unknown'}</p>
        </div>
    )
}

export default LocationData