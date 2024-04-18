// Import the function that returns a copy of the fish array
import { getTips } from "./database.mjs";

export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = `<div class="TipList">`

    // Create HTNL representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="Tip card">
            <div class="tip-text">${tip.text}</div>
        </section>
`
    }
    htmlString += `</div>`

    return htmlString
}
