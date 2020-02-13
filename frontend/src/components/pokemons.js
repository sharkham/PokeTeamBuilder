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
    this.form.addEventListener("change", this.createOrUpdatePokemon.bind(this))
    this.view = document.getElementById("view-box")
    //createPokemon here needs to change to a function that will create or post based on whether a Pokémon exists or not.
    //binding this here makes "this" the pokemons class so it can be used in createPokemon function
  }

  createOrUpdatePokemon(e) {
    //iterate through this.pokemons--a "find" for a Pokémon with the boxnumber
    const boxNumber = parseInt(e.target.id[e.target.id.length-1], 10)
    const entryNum = e.target.value
    const pokemonObj = this.pokemons.find(pokemon => pokemon.number === boxNumber)
    if (!!pokemonObj) {
      console.log("there is a pokemon in this box!")
    } else {
      console.log("there isn't a pokemon in this box yet!")
      this.createPokemon(entryNum, boxNumber)
    }
  }

  createPokemon(entryNum, boxNumber) {
    const pokedexEntry = this.pokedex.entries[entryNum-1]
    this.adapter.createPokemon(entryNum, this.trainer.id, pokedexEntry, boxNumber).then(pokemon => {
      this.pokemons.push(pokemon)
      pokemon = new Pokemon(pokemon)
      this.view.innerHTML += pokemon.viewBoxHTML()
      // console.log(this.pokemons)
      // pokemon.renderPokemonInViewBox()
    })
  }

  render() {
    this.pokemons.forEach(pokemon => {
      pokemon = new Pokemon(pokemon)
      this.view.innerHTML += pokemon.viewBoxHTML()
      // is this the place for this to be happening?
    })
  }
}
