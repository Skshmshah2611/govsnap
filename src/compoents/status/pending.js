import React, { useEffect, useState } from "react";
import axios from "axios"


function Pending() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPr = async () => {
      console.log("Entered");
      const response = await axios.get('https://synth-ai-envoys.onrender.com/getPressReleasesListing?status=pending');

      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData); // Update the state with the fetched data
      setIsLoading(false);
  
  };

  useEffect(() => {
    // Fetch data from the API
    getPr();
  }, []); // Add an empty dependency array to run this effect only once

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

export default Pending;
