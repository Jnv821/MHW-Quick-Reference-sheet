import React from 'react';
import { MonsterDescription } from './MonsterDescription.jsx';
import MonsterLocation from './MonsterLocation.jsx';

const MonsterInfo = (props) => {

    const mon = props.mon

    return(
        <div className="monsterInfo">
                <MonsterDescription mon={mon}/>
                <MonsterLocation mon={mon}/>
        </div>
    )
}

export default MonsterInfo