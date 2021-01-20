import React, { useState, useEffect } from "react";

const Vehicles = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles/")
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
                            <p>Model: {item.model}</p>
                            <p>Crew: {item.crew}</p>
                            <p>Max Speed: {item.max_atmosphering_speed}</p>
                            <p>Passenger Capacity: {item.passengers}</p>
                            <p>Cost: {item.cost_in_credits} credits</p>
                            <p>Manufacturer: {item.manufacturer}</p>
                            <p>Vehicle Class: {item.vehicle_class}</p>
                        </div>
                    </div>
                )})}
            </div>
        );
    }   
}

export default Vehicles;