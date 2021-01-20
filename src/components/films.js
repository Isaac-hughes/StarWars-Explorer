import React, { useState, useEffect } from "react";

const Films = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/films/")
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
                        <h1 key={index}>{item.title}</h1>
                        <div className="content">
                            <p>Producer: {item.producer}</p>
                            <p>Release Date: {item.release_date}</p>
                            <p>Episode ID: {item.episode_id}</p>
                            <p>Opening Crawl: {item.opening_crawl}</p>
                        </div>
                    </div>
                )})}
            </div>
        );
    }   
}

export default Films;