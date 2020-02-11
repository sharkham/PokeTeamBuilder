class PokemonsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/pokemons'
  }

  // getEntries() {
  //   return fetch(this.baseUrl).then(res => res.json())
  // }

  createPokemon(value, trainerId) {
    const pokemon = {
      //find by id? Or find by name if I change the value
      //then set all properties here
    }
    return fetch(this.baseURL, {
      method: "POST",
      body: JSON.stringify({ pokemon: pokemon })
    })
  }
}
