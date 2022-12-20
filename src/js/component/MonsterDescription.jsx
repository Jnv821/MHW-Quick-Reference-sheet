import React from 'react';

const MonsterDescription = (props) => {
    
    const mon = props.mon
    
    const species = mon.species.charAt(0).toUpperCase() + mon.species.slice(1)

    return (  
        <>
        <h1 className="display-5">{mon.name}</h1>
            <p>{species}</p>
            <p className="text-justify">{mon.description}</p>
        </>
    );
}
 
export { MonsterDescription };