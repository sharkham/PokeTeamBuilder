class Pokemons {
  constructor(entries, trainer){
    this.trainer = trainer
    this.pokemons = this.trainer.pokemons
    //this needs to load with the trainer's Pokemon.
    this.adapter = new PokemonsAdapter()
    this.initBindingsAndEventListeners()
    // this.fetchAndLoadPokemons()
    this.pokedex = entries
    this.render()
    //this needs to load with trainer. Pokemons need to load with trainer
  }

  initBindingsAndEventListeners() {
    document.getElementsByTagName("H1")[0].getAttribute("class");
    // //find the trainer from id put on page??
    this.form = document.getElementById("poke-select-form")
    this.form.addEventListener("change", this.createPokemon.bind(this))
    this.view = document.getElementById("view-box")
    //createPokemon here needs to change to a function that will create or post based on whether a Pokémon exists or not.
    //binding this here makes "this" the pokemons class so it can be used in createPokemon function
  }

  createPokemon(e) {
    let boxNumber = e.target.id[e.target.id.length-1]
    let trainerString = document.getElementById("trainername").getAttribute("trainerid")
    this.trainerId = parseInt(trainerString, 10)
    //need to make sure it:
    //creates pokemon if none exists
    //changes pokemon species if it does exist
    //deletes pokemon if set to blank(?) (might be bonus)
    const value = e.target.value
    const pokedexEntry = this.pokedex.entries[value-1]
    //somehow, get request to api/v1/entries based on value(id), and then use that info to make Pokémon
    this.adapter.createPokemon(value, this.trainerId, pokedexEntry, boxNumber).then(pokemon => {
      this.pokemons.push(pokemon)
      pokemon = new Pokemon(pokemon)
      this.view.innerHTML += pokemon.renderPokemonHTML()
      // console.log(this.pokemons)
      // pokemon.renderPokemonHTML()
    })
  }

  render() {
    this.pokemons.forEach(pokemon => {
      pokemon = new Pokemon(pokemon)
      this.view.innerHTML += pokemon.renderPokemonHTML()
      // is this the place for this to be happening?
    })
  }
}
