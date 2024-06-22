import React, { useState } from 'react';
import "./Gigs.scss";
import {gigs} from "../../data"
import GigCard from "../../components/gigCard/GigCard"

const Gigs = () => {

  const[open,setOpen]=useState(false);
  const[sort,setSort]=useState("Sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className='gigs'>
      <div className="container">
        <div className="breadcrumbs"> FIVERR {'>'} GRAPICS & DESIGN {'>'}</div>
        <h1>AI ARTIST</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        
        <div className="menu">
          <div className="budget">
            <span>Budget</span>
            <input type="text" placeholder="min"/>
            <input type="text" placeholder="max"/>
            <button>Apply</button>
          </div>

          <div className="sorting">
            <span className='sortBy'>Sort By</span>
            <span className='bestSelling'>{sort==="sales" ? "Best Selling" : "Newest"}</span>
            <img src='./img/down.png' onClick={()=>setOpen(!open)} alt=''/>
           {open && ( <div className="rightMenu">
              {sort ==="sales" ?(<span onClick={()=>reSort("createdAt")}>Newest</span>)
              : (<span onClick={()=>reSort("sales")}>Best Selling</span>)}
            </div>)}
          </div>
        </div>
        <div className="cards">
         { gigs.map(gig=>
          (<GigCard key={gig.id} item={gig}/>))}
        </div>

      </div>
    </div>
  )
}

export default Gigs;
