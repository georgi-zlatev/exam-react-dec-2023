import { useEffect, useState } from "react"

import './LocationsList.css';

import * as locationService from '../../services/LocationService'
import LocationListItem from "./LocationListItem/LocationListItem"

export default function LocationList() {
  const [locations, setLocations] = useState([])
useEffect(() => {
locationService.getAll()
.then(result => setLocations(result))
}, [])

    return(

<section id="catalog-page">
  <h1 className="locations-heading">All Locations</h1>

  <div className="row">
        {locations.map(location => (
          <div key={location._id} className="col-md-3 mb-3 items"> {/* Use col-md-4 to create three columns */}
            <LocationListItem {...location} />
          </div>
        ))}
      </div>

  {locations.length === 0 &&
   (<h3 className="no-locations">No locations yet</h3>
   )}

  
</section>
    )
}