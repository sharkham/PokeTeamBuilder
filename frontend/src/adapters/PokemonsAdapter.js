class PokemonsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/pokemons'
  }

  // getEntries() {
  //   return fetch(this.baseUrl).then(res => res.json())
  // }

  createPokemon(trainerId, pokedexEntry, boxNumber) {
    const pokemon = {
      name: pokedexEntry.name,
      number: boxNumber,
      image: pokedexEntry.image,
      icon: pokedexEntry.icon,
      height: pokedexEntry.height,
      position: "static",
      zindex: 0,
      trainer_id: trainerId
    }
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ pokemon: pokemon })
    }).then(res => res.json())
    .catch(error => console.error(error))
  }

  updatePokemonType(pokeId, pokedexEntry) {
    const pokemon = {
      //updated values
      name: pokedexEntry.name,
      image: pokedexEntry.image,
      icon: pokedexEntry.icon,
      height: pokedexEntry.height
    }
    return fetch(`${this.baseUrl}/${pokeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ pokemon: pokemon })
    }).then(res => {
      // console.log(res.json())
      return res.json()
    }).catch(error => console.error(error))
  }

  updatePokemonPosition(pokeId, zindex, xaxis, yaxis) {
    const pokemon = {
      zindex: zindex,
      xaxis: xaxis,
      yaxis: yaxis,
      position: "absolute"
    }
    return fetch(`${this.baseUrl}/${pokeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ pokemon: pokemon })
    }).then(res => {
      return res.json()
    }).catch(error => console.error(error))
  }

  //helper methods

  // setPositionValues(boxNumber) {


  //   //return a hash of position values dependent on which box the Pokémon was selected from
  // }
}
