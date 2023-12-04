import { useNavigate } from "react-router-dom"

import * as locationService from '../../services/locationService'

export default function LocationGreate() {
    const navigate = useNavigate()

    const createLocationSubmitHandler = async (e) => {
        e.preventDefault();

        const locationData = Object.fromEntries(new FormData(e.currentTarget))

        try {
            await locationService.create(locationData)

            navigate('/locations')
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <div>
      <h1>Create a New Location</h1>
      <form id="create" onSubmit={createLocationSubmitHandler}>
        <div className="form-group">
          <label htmlFor="locationName">Location Name:</label>
          <input
            type="text"
            id="locationName"
            name="locationName"
            placeholder="Enter location name"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="foodCategory">Food Category:</label>
          <input
            type="text"
            id="foodCategory"
            name="foodCategory"
            placeholder="Enter food category"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageField">Image URL:</label>
          <input
            type="text"
            id="imageField"
            name="imageField"
            placeholder="Enter image URL"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            placeholder="Enter location summary"
            className="form-control"
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Create Location
        </button>
      </form>
    </div>
    )
}