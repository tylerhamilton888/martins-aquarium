const database = {
    fish: [
        {
            id: 1,
            name: "Bruce Wayne",
            species: "Red Lipped Batfish",
            length: 10,
            locationHarvested: "Gotham City",
            food: "Justice",
            image: "batfish-image.jpg"

        },
        {
            id: 2,
            name: "Kroak",
            species: "Hairy Frogfish" ,
            length: 20,
            locationHarvested: "Shrek's Swamp" ,
            food: "Everything, but mostly souls",
            image: "frogfish-image.jpg"

        },
        {id: 3,
            name: "Linus",
            species: "Lionfish" ,
            length: 50 ,
            locationHarvested: "The bucket in the basement, next to the mop" ,
            food: "Antelope",
            image: "lionfish-image.jpg"

        },
        {
            id: 4,
            species: "Example" ,
            length: 4,
            locationHarvested: "Dallas",
            food: "Food"
        }

    ],
    tips: [
        {
        id: 1,
        text: "Text goes here"
        },
        {
            id: 2,
            text: "This is your second tip"
        },
        {
            id: 3,
            text: "This is your third tip"
        }
    ],
    locations: [
        {
            id: 1,
            locationName: "Name of Location"
        },
    ]
    
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(locations =>({...locations}))
}