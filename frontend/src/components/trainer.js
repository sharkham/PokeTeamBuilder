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
  }

  renderTrainer() {
    this.h2.innerText = this.name
    this.h2.setAttribute("id", "trainername")
    this.h2.setAttribute("trainerid", `${this.id}`)
    // this.pokemons = new Pokemons(this.entries, this.trainer)
  }

  renderTrainersPokemons(entries) {
    this.pokemons = new Pokemons(entries, this)
  }

  // renderTrainer(){
  //   let h2 = document.createElement("h2")
  //   h2.innerText = this.name
  //   h2.setAttribute("trainerId", `${this.id}`)
  //   this.div.appendChild(h2)
  //   console.log(this.pokemons)
  // }
}
