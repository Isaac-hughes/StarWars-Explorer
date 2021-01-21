import React, { useState, useEffect } from "react";
import {data} from "../assets/starwarsimg"

const People = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getImageLink = (idVal) => {
        let arr = data.people
        return (
            <img src={arr[idVal].default}></img>
        )
    }

    useEffect(() => {
        fetch("https://swapi.dev/api/people/")
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
                            <p>Birth Year: {item.birth_year}</p>
                            <p>Gender: {item.gender}</p>
                            <p>Height: {item.height}</p>
                            <p>Eye Colour: {item.eye_color}</p>
                            <p>Skin Colour: {item.skin_color}</p>
                            <p>Hair Colour: {item.hair_color}</p>
                        </div>
                    </div>
                )})}
            </div>
        );
    }   
}



export default People;