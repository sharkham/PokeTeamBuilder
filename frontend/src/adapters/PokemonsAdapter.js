class PokemonsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/pokemons'
  }

  // getEntries() {
  //   return fetch(this.baseUrl).then(res => res.json())
  // }

  createPokemon(value, trainerId, pokedexEntry) {
    // console.log(value)
    // console.log(trainerId)
    // console.log(pokedexEntry)
    // console.log(pokedex.entries)
    const pokemon = {
      name: pokedexEntry.name,
      image: pokedexEntry.image,
      height: pokedexEntry.height,
      // xaxis: ,
      // yaxis: ,
      // zindex: ,
      trainer_id: trainerId
      //find by id? Or find by name if I change the value
      //then set all properties here
    }
    return fetch(this.baseUrl, {
      method: "POST",
      body: JSON.stringify({ pokemon: pokemon })
    })
  }

  updatePokemon(value, trainerId) {
    const pokemon = {
      //updated values
    }
    return fetch(this.baseURL, {
      method: "PATCH",
      body: JSON.stringify({ pokemon: pokemon })
    })

  }
}
