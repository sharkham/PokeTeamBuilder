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
    document.getElementsByTagName("H1")[0].getAttribute("class")
    // //find the trainer from id put on page??
    this.form = document.getElementById("select-form")
    this.form.addEventListener("change", this.createOrUpdatePokemon.bind(this))
    this.view = document.getElementById("view-box")
    //createPokemon here needs to change to a function that will create or post based on whether a Pokémon exists or not.
    //binding this here makes "this" the pokemons class so it can be used in createPokemon function
  }

  createOrUpdatePokemon(e) {
    //iterate through this.pokemons--a "find" for a Pokémon with the boxnumber
    if (e.target.className === "pokeselect") {
      const boxNumber = parseInt(e.target.id[e.target.id.length-1], 10)
      const entryNum = e.target.value
      const pokemonObj = this.pokemons.find(pokemon => pokemon.number === boxNumber)
      if (!!pokemonObj) {
        this.updatePokemon(pokemonObj, entryNum, boxNumber)
      } else {
        this.createPokemon(entryNum, boxNumber)
      }
    }
    // console.log(e.target)

  }

  updatePokemon(pokemonObj, entryNum, boxNumber) {
    const pokedexEntry = this.pokedex.entries[entryNum-1]
    this.adapter.updatePokemon(pokemonObj.id, pokedexEntry).then(pokemon => {

      // console.log(pokemonObj)
      // console.log(this.trainer.pokemons)
      this.trainer.updateTrainersPokemons(pokemon)
      pokemon = new Pokemon(pokemon)
      //find image by box number and replace image
      const pokeSprite = document.getElementById(`pokesprite${boxNumber}`)
      pokeSprite.setAttribute("src", pokemon.image)
      pokemon.setSpriteHeight(pokeSprite)
      // console.log(pokemon)
      pokemon.renderPokemonInControlBox()
      // console.log(this.pokemons)
      //go through array of trainer's pokemon and swap out for new pokemon that gets returned
      //index_of method in JavaScript index_of old Pokémon object, return that number,
      //take trainer.pokemons array at that square bracket index and replace it
    })
  }

  createPokemon(entryNum, boxNumber) {
    const pokedexEntry = this.pokedex.entries[entryNum-1]
    this.adapter.createPokemon(this.trainer.id, pokedexEntry, boxNumber).then(pokemon => {
      this.pokemons.push(pokemon)
      pokemon = new Pokemon(pokemon)
      this.view.appendChild(pokemon.viewBoxSprite())
      pokemon.renderPokemonInControlBox()
      // this.view.innerHTML += pokemon.viewBoxHTML()
      // console.log(this.pokemons)
      // pokemon.renderPokemonInViewBox()
    })
  }

  render() {
    // this.view.innerHTML = ""
    //clear existing stuff and then re-render
    // console.log(this.pokemons)
    this.pokemons.forEach(pokemon => {
      pokemon = new Pokemon(pokemon)
      this.view.appendChild(pokemon.viewBoxSprite())
      let testVar = document.getElementById(`pokesprite${pokemon.number}`)
      // console.log(testVar.clientHeight)
      pokemon.renderPokemonInControlBox()
      // this.view.innerHTML += pokemon.viewBoxHTML()
      // is this the place for this to be happening?
    })
  }
}

//rendering the Pokémon is not DRY here
