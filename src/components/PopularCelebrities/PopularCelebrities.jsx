import './PopularCelebrities.css'
import React, { useEffect, useState } from "react";

const FeaturedToday = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [top, setTop] = useState([]);
  const [topCelebs, setTopCelebs]=useState([]);
  useEffect(() => {
    fetch("/movieStaticFiles/celebrities.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => setCelebrities(data))
      .catch((error) => console.error("Error fetching JSON:", error));

      fetch("/movieStaticFiles/top-celebrities.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => setTop(data.slice(0,6)))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(()=>{
    setTopCelebs(celebrities.filter(c=>(top.includes(c.celebrity_id))));
  },[celebrities, top])

  return (
    <div>
      
      <div className="celebs-list">
        {topCelebs.map((celeb, index) => (
          <div key={index} className="celeb-item">
            <img src={celeb.cover} alt={celeb.name} />
            <p>{celeb.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedToday;
