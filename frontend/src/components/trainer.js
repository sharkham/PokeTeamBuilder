class Trainer {
  constructor(entryJSON) {
    this.id = entryJSON.id
    this.name = entryJSON.name
    this.image = entryJSON.image
    this.height = entryJSON.height
    this.xaxis = entryJSON.xaxis
    this.yaxis = entryJSON.yaxis
    this.zindex = entryJSON.zindex
    this.position = entryJSON.position
    this.pokemons = entryJSON.pokemons
    this.initBindingsAndEventListeners()
  }

  initBindingsAndEventListeners() {
    this.h2 = document.getElementById("trainername")
    this.view = document.getElementById("view-box")
    this.trainerControlBox = document.getElementById("control-trainer")
    this.trainerSelect = document.getElementById("trainerspriteselect")
  }

  renderTrainer() {
    this.h2.innerText = this.name
    this.h2.setAttribute("id", "trainername")
    this.h2.setAttribute("trainerid", `${this.id}`)
    this.view.appendChild(this.viewBoxSprite())
    this.renderTrainerInControlBox()
    // this.pokemons = new Pokemons(this.entries, this.trainer)
  }

  viewBoxSprite() {
    const image = document.createElement("img")
    image.setAttribute("src", this.image)
    image.setAttribute("id", "trainersprite")
    image.style.position = this.position
    image.style.zIndex = this.zindex
    image.style.left = `${this.xaxis}px`
    image.style.top = `${this.yaxis}px`
    return image
    // this.view.innerHTML += `<img src="${this.image}" id="trainersprite">`
  }

  renderTrainerInControlBox() {
    this.trainerControlBox.innerHTML = `<img src="${this.image}">`
    const array = this.image.split(/[^a-zA-Z\d\s]/)
    const imageId = array[2]
    // const imageId2 = imageId[2]
    this.trainerSelect.value = imageId
    //change later to be smaller trainer icon
  }

  renderTrainersPokemons(entries) {
    new Pokemons(entries, this)
    // this.pokemons = new Pokemons(entries, this)
  }

  updateTrainersPokemons(pokemonObj) {
    const indexToUpdate = this.pokemons.findIndex(pokemon => pokemon.number === pokemonObj.number)
    this.pokemons[indexToUpdate] = pokemonObj
  }
}
