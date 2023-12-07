import React, { useEffect, useState } from "react";
import * as locationService from '../../services/locationService';
import "./Home.css"; // Import the CSS file
import { Link } from "react-router-dom";
import LatestLocation from "./LatestGame/LatestGame";
import withAuth from "../../HOC/withAuth";

function Home({
  _id,
  accessToken,
  email,
}) {
  const [latestLocations, setLatestLocations] = useState([])

  useEffect(() => {
    locationService.getLatest()
    .then(result => setLatestLocations(result))
  }, [])


  return (
    <div className="welcome-world">
      <h1>Welcome to Local Food Events</h1>
      <p>
        Your go-to destination for a culinary adventure in the heart of Sofia!
        Discover the city's vibrant food scene and upcoming - from trendy
        eateries to hidden gems, Local Food Events provides a curated guide to
        satisfy your cravings.
      </p>
<br />
<h1>Latest Locations</h1>
{latestLocations.map(location => <LatestLocation {...location} />)}

{!latestLocations.length && <p>There are no locations currently!</p>}
     

    </div>
  );
}

const EnchancedHome = withAuth(Home);

export default EnchancedHome;