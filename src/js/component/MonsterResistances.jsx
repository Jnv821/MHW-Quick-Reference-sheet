import React from 'react';
import icons from "../iconimages.json"


const MonsterResistances = (props) => {
    
    const mon = props.mon
    

    const resistance = mon.resistances.map((res, i) => {

    const element = res.element.charAt(0).toUpperCase() + res.element.slice(1)
    
    const stars = res.stars === 1 ? "✖" : res.stars === 2 ? "★★" : "★★★"

    if(i === mon.resistances.length - 1){
        return (
        <li key={i}>
            {element}
            <img  className='elementIcon'  src={icons[res.element]}></img>
            ({stars})
        </li>
        ) 
        } else {
        return (
        <li key={i}>
            {element}
            <img className='elementIcon' src={icons[res.element]}></img>
            ({stars})
        </li>
        )
    }
    })

    return ( 
        <div className='m-0 resist'>
            <h2 className='display-6'>Resistances:</h2>
            <ul>
            {resistance.length === 0 ? <li>None</li> : resistance}
            </ul>
        </div>
    );
}


export default MonsterResistances