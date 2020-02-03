import React from 'react'
import zipcode from './zipcode-slim.json'
import LocationData from './LocationData'

const EnterZip = (props) => {
    const data = zipcode[parseInt(props.value).toString()]
    return (
        <div>
            <label>Enter zip code {props.num}: </label>
            <input value={props.value} name={props.num} onChange={props.handleChange}/>
            {!data && props.value && (<h4>please enter a valid zipcode</h4>)}
            {data && (<LocationData info={data}/>)}
        </div>
    )
}

export default EnterZip