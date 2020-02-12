class Pokemons {
  constructor(entries){
    this.pokemons = []
    this.adapter = new PokemonsAdapter()
    this.initBindingsAndEventListeners()
    // this.fetchAndLoadPokemons()
    this.pokedex = entries
    //this needs to load with trainer. Pokemons need to load with trainer
  }

  initBindingsAndEventListeners() {
    document.getElementsByTagName("H1")[0].getAttribute("class");
    // //find the trainer from id put on page??
    this.form = document.getElementById("poke-select-form")
    this.form.addEventListener("change", this.createPokemon.bind(this))
    //binding this here makes "this" the pokemons class so it can be used in createPokemon function
  }

  createPokemon(e) {
    let trainerString = document.getElementById("trainername").getAttribute("trainerid")
    this.trainerId = parseInt(trainerString, 10)
    console.log(this.pokedex.entries[e.target.value-1])
    //need to make sure it:
    //creates pokemon if none exists
    //changes pokemon species if it does exist
    //deletes pokemon if set to blank(?) (might be bonus)
    const value = e.target.value
    //somehow, get request to api/v1/entries based on value(id), and then use that info to make Pokémon
    this.adapter.createPokemon(value, this.trainerId)
  }
}
