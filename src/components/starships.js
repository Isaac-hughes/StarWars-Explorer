import React, { useState, useEffect } from "react";
import {data} from "../assets/starwarsimg"

const Starships = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getImageLink = (idVal) => {
        let arr = data.starships
        return (
            <img src={arr[idVal].default}></img>
        )
    }

    useEffect(() => {
        fetch("https://swapi.dev/api/starships/")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(result);
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])
    

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        // add cool loading thing
        return <div>Loading...</div>;
    } else {
        return (
            <div className="linkContent">
                {items.results && items.results.map((item, index) => {
                return (
                    <div className="tileContent">
                        <div className="content">
                            {getImageLink(item.name)}
                         <h1 key={index}>{item.name}</h1>
                            <p>Model: {item.model}</p>
                            <p>Crew: {item.crew}</p>
                            <p>Cargo Capacity: {item.cargo_capacity}</p>
                            <p>Passenger Capacity: {item.passengers}</p>
                            <p>Cost: {item.cost_in_credits} credits</p>
                            <p>Manufacturer: {item.manufacturer}</p>
                            <p>Hyperdrive Rating: {item.hyperdrive_rating}</p>
                            <p>Starship Class: {item.starship_class}</p>
                        </div>
                    </div>
                )})}
            </div>
        );
    }   
}

export default Starships;