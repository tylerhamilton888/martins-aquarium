// Import the function that returns a copy of the fish array
import {getFish} from "./database.mjs"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = `<div class="FishList">`

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish-image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Name:${fish.name}</div>
            <div class="fish__species">Species:${fish.species}</div>
            <div class="fish__length">Length:${fish.length}</div>
            <div class="fish__location">Location Harvested:${fish.locationHarvested}</div>
            <div class="fish__diet">Diet:${fish.food}</div>
        </section>
`
    }
    htmlString += `</div>`

    return htmlString
}

export const mostHolyFish = () => {
    
    const fish = getFish();

    // 3, 6, 9, 12, etc... fish
    const holyFish = [];

    for (const oneFish of fish) {
        if (oneFish.length % 3 === 0) {
            holyFish.push(oneFish);
        }
    }

    return holyFish;
};

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const fish = getFish();

    for (const oneFish of fish) {
        if (oneFish.length % 5===0) {
            soldierFish.push(oneFish)
        }
    }
    
    
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const fish = getFish();

    for (const oneFish of fish) {
        if (oneFish.length % 3 !== 0 && oneFish.length % 5 !== 0) {
            nonHolyFish.push(oneFish);
        }
    }

    return nonHolyFish;
}