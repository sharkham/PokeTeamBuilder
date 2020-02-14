class Trainer {
  constructor(entryJSON) {
    this.id = entryJSON.id
    this.name = entryJSON.name
    this.image = entryJSON.image
    this.height = entryJSON.height
    this.pokemons = entryJSON.pokemons
    this.initBindingsAndEventListeners()
    //set these to defaults on render, somehow depending on which select they come from
    // this.xaxis =
    // this.yaxis =
    // this.zindex =
  }

  initBindingsAndEventListeners() {
    this.h2 = document.getElementById("trainername")
    this.view = document.getElementById("view-box")
    this.trainerControlBox = document.getElementById("control-trainer")
  }

  renderTrainer() {
    this.h2.innerText = this.name
    this.h2.setAttribute("id", "trainername")
    this.h2.setAttribute("trainerid", `${this.id}`)
    this.renderTrainerInViewBox()
    this.renderTrainerInControlBox()
    // this.pokemons = new Pokemons(this.entries, this.trainer)
  }

  renderTrainerInViewBox() {
    this.view.innerHTML += `<img src="${this.image}">`
  }

  renderTrainerInControlBox() {
    this.trainerControlBox.innerHTML = `<img src="${this.image}">`
    //change later to be smaller trainer icon
  }

  renderTrainersPokemons(entries) {
    new Pokemons(entries, this)
    // this.pokemons = new Pokemons(entries, this)
  }

  updateTrainersPokemons(pokemonObj) {
    // console.log(pokemonObj)
    // console.log(this.pokemons.pokemons)
    // this.pokemons.forEach(pokemon => {
    //   console.log(pokemon)
    // })
    console.log(this.pokemons)
    const indexToUpdate = this.pokemons.findIndex(pokemon => pokemon.number === pokemonObj.number)
    this.pokemons[indexToUpdate] = pokemonObj
    console.log(this.pokemons)

    // const pokemonObj = this.pokemons.find(pokemon => pokemon.number === boxNumber)

  }

  // renderTrainer(){
  //   let h2 = document.createElement("h2")
  //   h2.innerText = this.name
  //   h2.setAttribute("trainerId", `${this.id}`)
  //   this.div.appendChild(h2)
  //   console.log(this.pokemons)
  // }
}
