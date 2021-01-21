import React, { useState, useEffect } from "react";
import {data} from "../assets/starwarsimg"

const Planets = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getImageLink = (idVal) => {
        let arr = data.planets
        return (
            <img src={arr[idVal].default}></img>
        )
    }

    useEffect(() => {
        fetch("https://swapi.dev/api/planets/")
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
                        {getImageLink(item.name)}
                        <div className="content">
                            <h1 key={index}>{item.name}</h1>
                            <p>Climate: {item.climate}</p>
                            <p>Gravity: {item.gravity}</p>
                            <p>Population: {item.population}</p>
                            <p>Terrain: {item.terrain}</p>
                            <p>Orbital Period: {item.orbital_period} days</p>
                        </div>
                    </div>
                )})}
            </div>
        );
    }   
}

export default Planets;