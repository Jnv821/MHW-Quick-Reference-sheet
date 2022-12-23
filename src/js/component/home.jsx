import React, { useState, useEffect } from "react";
import Post from "./Post.jsx";
import InputMonsterName from "./InputMonsterName.jsx";
import InputMonsterLocation from "./InputMonsterLocation.jsx";
//create your first component
const Home = () => {
	
	const [monsters, setMonsters] = useState([])
	
	// Get the monsters?
	useEffect(() => {
		fetch("https://mhw-db.com/monsters")
		.then( response => {
			console.log("Getting Monsters.." + response.ok)
			console.log("Getting Monster status: " + response.status)
			return response.json()
		}).then(data => {
			setMonsters(
				[...data.filter(
				(item => {
				return item.type === "large"
				}))]
			)

		}).catch(error => {
			console.log(error)
		})
	}, [])

	//log stat
	useEffect(() => {
		console.log(monsters)
	}, [monsters])

	const [filterByName, setFilterByName] = useState("")

	const handleFilterByName = (ev) => {
		setFilterByName(ev.target.value)
	}

	const [filterByLocation, setFilterByLocation] = useState("")

	const handleFilterByLocation = (ev) => {
		setFilterByLocation(ev.target.value)
	}
	// Clean the data to pass to the location input.

	const monsterList = monsters.map((monster) => {
		return monster
	})

	const monsterLocations = monsterList.map((monster) => {
		return monster.locations.map((location) => {
			return location.name
		})
	})

	const monsterLocationNames = monsterLocations.flatMap((location) => {
		return location
	})

	const uniqueMonsterLocations = [... new Set(monsterLocationNames)]

	uniqueMonsterLocations.unshift("None")

	return ( 
		<div className="container">
			<h1 className="display-1 text-white text-center">MHW Quick Reference Sheet</h1>
			<InputMonsterName handleFilter={handleFilterByName}/>
			<InputMonsterLocation locations={uniqueMonsterLocations} handleFilter={handleFilterByLocation}/>
			<Post monsters={monsters} filter={filterByName} option={filterByLocation}/>
		</div>
	);
};

export default Home;
