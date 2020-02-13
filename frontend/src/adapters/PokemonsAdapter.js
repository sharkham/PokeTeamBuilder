class PokemonsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/pokemons'
  }

  // getEntries() {
  //   return fetch(this.baseUrl).then(res => res.json())
  // }

  createPokemon(value, trainerId, pokedexEntry, boxNumber) {
    console.log(value)
    // console.log(trainerId)
    // console.log(pokedexEntry)
    // console.log(pokedex.entries)
    // const sizeValues = setSizeValues(boxNumber)
    const pokemon = {
      name: pokedexEntry.name,
      number: boxNumber,
      image: pokedexEntry.image,
      height: pokedexEntry.height,
      // xaxis: sizeValues[x],
      // yaxis: [y],
      // zindex: [z],
      trainer_id: trainerId
      //find by id? Or find by name if I change the value
      //then set all properties here
    }
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ pokemon: pokemon })
    }).then(res => res.json())
  }

  updatePokemon(value, trainerId, pokedexEntry, boxNumber) {
    const pokemon = {
      //updated values
      name: pokedexEntry.name,
      image: pokedexEntry.image,
      height: pokedexEntry.height
    }
    return fetch(this.baseURL, {
      method: "PATCH",
      body: JSON.stringify({ pokemon: pokemon })
    })

  }

  //helper methods

  // setSizeValues(boxNumber) {


  //   //return a hash of position values dependent on which box the Pokémon was selected from
  // }
}
