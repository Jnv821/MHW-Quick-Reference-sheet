import React, { useState, useEffect } from "react";
import Post from "./Post.jsx";
import InputMonsterName from "./InputMonsterName.jsx";
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

	return ( 
		<div className="container">
			<h1 className="display-1 text-white text-center">MHW Quick Reference Sheet</h1>
			<InputMonsterName handleFilter={handleFilterByName}/>
			<Post monsters={monsters} filter={filterByName} option={filterByLocation}/>
		</div>
	);
};

export default Home;
