import React, { useEffect } from 'react';

function InputMonsterLocation(props) {

    const Options = props.locations.map( (location, i) => (
    <option value={location} key={i}>{location}</option>)
    )

    return ( 
    <select name="Options" id="Options" onChange={props.handleFilter}>
        {Options}
    </select>
    );
}

export default InputMonsterLocation;