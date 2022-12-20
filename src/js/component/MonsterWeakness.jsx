import React from 'react';
import icons from "../iconimages.json"


const MonsterWeakness = (props) => {
    
    const mon = props.mon

    const weakness = mon.weaknesses.map((weakness, i) => {
    
    const element = weakness.element.charAt(0).toUpperCase() + weakness.element.slice(1)
    
    const stars = weakness.stars === 1 ? "★" : weakness.stars === 2 ? "★★" : "★★★"

    if(i === mon.weaknesses.length - 1){
        return (
        <li key={i}>
            {element}
            <img  className='elementIcon'  src={icons[weakness.element]}></img>
            ({stars})
        </li>
        ) 
        } else {
        return (
        <li key={i}>
            {element}
            <img className='elementIcon' src={icons[weakness.element]}></img>
            ({stars})
        </li>
        )
    }
    
    })
    return ( 
        <div className='m-0'>
            <h2 className='display-6'>Weaknesses:</h2>
            <ul>
                {weakness}
            </ul>
        </div>
    );
}

export default MonsterWeakness;