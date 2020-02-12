class Trainers {
  constructor(entries){
    this.trainer = ""
    this.adapter = new TrainersAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadTrainer()
    this.entries = entries
    //this just fires when the thing starts. Going to have to find a way to login/signup first to fire it.
  }

  initBindingsAndEventListeners() {
    this.div = document.getElementById("trainer-view")
    this.h2 = document.getElementById("trainername")
  }

  fetchAndLoadTrainer() {
    this.adapter.getTrainer(1)
    //this (above) should NOT be hardcoded.
    .then(trainer => {
      this.trainer = new Trainer(trainer)
      // trainers.forEach(entry => this.trainers.push(new Entry(entry)))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    // let h2 = document.createElement("h2")
    this.h2.innerText = this.trainer.name
    this.h2.setAttribute("id", "trainername")
    this.h2.setAttribute("trainerid", `${this.trainer.id}`)
    // this.div.appendChild(h2)
    this.trainer.pokemons.forEach(pokemon => {
      pokemon = new Pokemon(pokemon)
      pokemon.renderPokemon()
      // is this the place for this to be happening?
    })
  }

}
