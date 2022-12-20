import React from 'react';

const MonsterLocation = (props) => {
    
    const mon = props.mon

    const locations = mon.locations.map((location, i) => {
        if(i === mon.locations.length - 1){
            return location.name
        } else {
            return `${location.name}, `
        }
    })

    return (
        <>
            <h2 className='display-6'>Locations:</h2> 
            <p>
                {locations}
            </p>
        </>
        );
}

export default MonsterLocation