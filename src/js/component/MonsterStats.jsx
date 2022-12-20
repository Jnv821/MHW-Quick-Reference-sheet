import React from 'react';
import MonsterWeakness from './MonsterWeakness.jsx';
import MonsterResistances from './MonsterResistances.jsx';

const MonsterStats = (props) => {
    
    const mon = props.mon
    
    return ( 
        <>
        <MonsterWeakness mon={mon}/>
        <MonsterResistances mon={mon}/>
        </>
    );
}

export default MonsterStats ;