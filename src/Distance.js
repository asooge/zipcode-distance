import React from 'react'

const Distance = (props) => {
    const radius = 3959
    const latRad1 = props.location1.Lat * Math.PI / 180
    const latRad2 = props.location2.Lat * Math.PI / 180
    const latDiff = (props.location2.Lat - props.location1.Lat) * Math.PI / 180
    const longDiff = (props.location2.Long - props.location1.Long) * Math.PI / 180

    const a = Math.sin(latDiff/2) * Math.sin(latDiff/2) + Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(longDiff/2) * Math.sin(longDiff/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    const distanceInMiles = radius * c

    return (
        <div>
            <h4>From {props.location1.LocationText} to {props.location2.LocationText}</h4>
            <p>{distanceInMiles.toFixed(2)} Miles</p>
        </div>
    )
}

export default Distance