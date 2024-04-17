import { getFish } from "./database.js"

const fish = getFish()

export const FishList = () => {
    let FishHTML = "<ul>"

    for (const fish of fish) {
        fishHTML += `<li>${fish.name}</li>`
    }

    fishHTML += "</ul>"

    return fishHTML
}