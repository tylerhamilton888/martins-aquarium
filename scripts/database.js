const database = {
    fish: [
        {
            id: 1,
            name: "Bruce Wayne",
            species: "Red Lipped Batfish",
            length: "10 Inches",
            locationHarvested: "Gotham City",
            food: "Justice"

        },
        {
            id: 2,
            name: "x",
            species: "X" ,
            length: "X" ,
            locationHarvested: "X" ,
            food: "X"

        },
        {id: 2,
            name: "x",
            species: "X" ,
            length: "X" ,
            locationHarvested: "X" ,
            food: "X"
        }

    ],
    

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
}
