// Import the function that returns a copy of the fish array
import { getLocations } from "./database.mjs";

export const LocationList = () => {
    
    const locations = getLocations()

   
    let htmlString = `<div class="LocationList">`

    
    for (const locations of locations) {

        
        htmlString += `<section class="Location card">
            <div class="location-text">${locations.locationName}</div>
        </section>
`
    }
    htmlString += `</div>`

    return htmlString
}
