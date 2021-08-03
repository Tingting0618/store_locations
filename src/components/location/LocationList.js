import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])


  return (
    <section className="locations">
      {
        locations.map(location => {
          return (
            <div className="location" id={`location--${location.id}`}>
              <div className="location__name">
              Address: { location.address }
              </div>
              <div className="location__sqft">
              Sqft: { location.sqft }
              </div>
              <div className="location__handicapAccess">
              Handicap Access: { location.handicapAccess.toString() }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}
