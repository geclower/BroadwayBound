import React from "react";
import { useState, useEffect } from "react";
import { getShows } from "../../services/shows.js";
import Show from "../../component/show/Show.jsx";
import "./Home.css";

function Home() {

    const[shows, setShows] = useState([])

    useEffect(()=> {
        fetchShows()
    }, [shows])

    async function fetchShows(){
        const allShows = await getShows()
        setShows(allShows)
    }

  return (
    <div>
      <h1 className="page-title">Broadway Bound</h1>
      <div className='shows-container'>
        {
            shows.map((show)=>(
                <Show show={show} key={show._id}/>
            ))
        }
      </div>
    </div>
  );
}

export default Home;
