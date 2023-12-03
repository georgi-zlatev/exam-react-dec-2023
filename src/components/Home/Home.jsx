import React from "react";

import "./Home.css"; // Import the CSS file

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



      <div class="card">
  <div class="card-body">
    <h5 class="card-title">  Discover nice brunch and lunch places in Sofia 
</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/locations" class="btn btn-primary">All locations</a>
  </div>
</div>

    </div>
  );
}
