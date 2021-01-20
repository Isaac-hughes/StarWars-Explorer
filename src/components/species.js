import React, { useState, useEffect } from "react";

const Species = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/species/")
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
                        <h1 key={index}>{item.name}</h1>
                        <div className="content">
                            <p>Classification: {item.classification}</p>
                            <p>Average Lifespan: {item.average_lifespan} years</p>
                            <p>Designation: {item.designation}</p>
                            <p>Language: {item.language}</p>
                            <p>Average Height: {item.average_height}cm</p>
                            <p>Skin Colours: {item.skin_colors}</p>
                            <p>Hair Colours: {item.hair_colors}</p>
                            <p>Eye Colours: {item.eye_colors}</p>
                        </div>
                    </div>
                )})}
            </div>
        );
    }   
}

export default Species;