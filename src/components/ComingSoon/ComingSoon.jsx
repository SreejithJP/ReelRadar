import './ComingSoon.css'
import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const [comingSoon, setComingSoon] = useState([]);
   useEffect(() => {
      fetch("/movieStaticFiles/upcoming_series.json") 
        .then((response) => response.json())
        .then((series) => setComingSoon((prev) => [...prev, ...series]))
        .catch((error) => console.error("Error fetching JSON:", error));

        fetch("/movieStaticFiles/upcoming_movies.json") 
        .then((response) => response.json())
        .then((movies) => setComingSoon((prev) => [...prev, ...movies]))
        .catch((error) => console.error("Error fetching JSON:", error));
        console.log(`length : ${comingSoon}`)
    }, []);

  return (
      <div className="comingSoon-container">
        <div className='comingSoon-list' >
        {comingSoon.map((coming, index) => (
          <div key={index} className="comingSoon-item">
            <img src={coming.cover} alt={coming.title} className='comingSoon-img'/>
            <p>{coming.title}</p>
            <p>{coming.release_date}</p>
          </div>
        ))}
        </div>
    </div>
);
};

export default ComingSoon;
