import React, { useEffect } from "react";
import MonsterIcons from "../images.json"
import MonsterInfo from "./MonsterInfo.jsx";
import MonsterStats from "./MonsterStats.jsx"

const Post = (props) => {

    const nameFilter = props.filter.toLowerCase()


    const filteredList = props.monsters.filter((monster, i) => (
        monster.name.toLowerCase().includes(nameFilter))) 

  
    const monsterList = filteredList.map((mon) => {
        return(
            <div className="monsterCard w-100 text-white-50 p-4">
                <MonsterInfo mon={mon}/>
                <div className="monsterStats">
                <MonsterStats mon={mon}/>
                </div>
                <div className="monsterIcon">
                <img className="monsterImg" src={MonsterIcons[mon.name]}></img> 
                </div>
            </div>
        )
    })

    return(
        <>
        {monsterList}
        </>
    )
}

export default Post