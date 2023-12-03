import React from "react";

import "./Home.css"; // Import the CSS file
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="welcome-world">
      <h1>Welcome to Local Food Events</h1>
      <p>
        Your go-to destination for a culinary adventure in the heart of Sofia!
        Discover the city's vibrant food scene and upcoming - from trendy
        eateries to hidden gems, Local Food Events provides a curated guide to
        satisfy your cravings.
      </p>



      <div className="card">
  <div className="card-body">
  <img src='/recipenoodlespastaicon_109880.ico' className="card-img-top" alt={location.title}/>
    <h5 className="card-title">  Discover nice brunch and lunch places in Sofia 
</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to={`/locations`} className="btn btn-primary">All Locations</Link>
  </div>
</div>

    </div>
  );
}
