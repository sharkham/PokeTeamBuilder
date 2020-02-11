class Pokemons {
  constructor(){
    this.pokemons = []
    this.adapter = new PokemonsAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadPokemons()
  }
}
