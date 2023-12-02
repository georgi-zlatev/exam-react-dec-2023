import { useEffect, useState } from "react"

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
  <h1>All Locations</h1>

  {locations.map(location => (
    <LocationListItem key={location._id} {...location}/> // does the action for all games
  ))}  

  {locations.length === 0 &&
   (<h3 className="no-locations">No locations yet</h3>
   )}

  
</section>
    )
}