import './Top10.css'
import React, { useEffect, useRef, useState } from 'react'

const Top10=()=>{
const [top10,setTop10]=useState([]);
const listRef = useRef(null);
useEffect(()=>{
    fetch('/movieStaticFiles/top10.json')
    .then((response)=>response.json())
    .then((data)=>setTop10(data.slice(0,10)))
    .catch((error)=>console.error("Error fetching JSON:", error));
},[]);
const scrollNext = () => {
    listRef.current.scrollBy({ left: 350, behavior: 'smooth' });
};
const scrollPrev = () => {
    listRef.current.scrollBy({ left: -350, behavior: 'smooth' });
};

return (
    <div className='top10-container'>
        <div className='scrollingWrap'>
        <button className="prev-btn" onClick={scrollPrev}>&lt;</button>
        <div className='top10-list' ref={listRef}>
            {top10.map((top, index) => (
                <div key={index} className="top10-item">
                    <img src={top.poster_url} alt={top.name} className='top10-img' />
                    <p className='topRating'>{top.rating}⭐</p>
                    <p className='topName'>{top.name}</p>
                </div>
            ))}
        </div>
        <button className="next-btn" onClick={scrollNext} >&gt;</button>
        </div>
    </div>
);
};

export default Top10;