import React, { useEffect, useState } from "react";




function Rejected() {
    const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    // Fetch data from the API
    fetch('https://synth-ai-envoys.onrender.com/getPressReleasesListing')
    .then((response) => response.json())
    .then((data) => {
        setData(data);
        setIsLoading(false);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
    });
}, []);

return (
    <div>
    <h2>Press Releases</h2>
    {isLoading ? (
        <p>Loading...</p>
    ) : (
        <ul>
        {data.map((item) => (
            <li key={item.id}>
            <strong>{item.title}</strong> - {item.date}
            <p>{item.description}</p>
            </li>
        ))}
        </ul>
    )}
    </div>
);
}
export default Rejected;