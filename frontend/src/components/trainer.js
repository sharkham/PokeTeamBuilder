class Trainer {
  constructor(entryJSON) {
    this.id = entryJSON.id
    this.name = entryJSON.name
    this.image = entryJSON.image
    this.height = entryJSON.height
    this.pokemons = entryJSON.pokemons

    //set these to defaults on render, somehow depending on which select they come from
    // this.xaxis =
    // this.yaxis =
    // this.zindex =
  }

  // renderTrainer(){
  //   let h2 = document.createElement("h2")
  //   h2.innerText = this.name
  //   h2.setAttribute("trainerId", `${this.id}`)
  //   this.div.appendChild(h2)
  //   console.log(this.pokemons)
  // }
}
