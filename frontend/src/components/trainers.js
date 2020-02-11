class Trainers {
  constructor(){
    this.trainer = ""
    this.adapter = new TrainersAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadTrainer()
    //this just fires when the thing starts. Going to have to find a way to login/signup first to fire it.
  }

  initBindingsAndEventListeners() {
    this.div = document.getElementById("trainer-view")
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
    let h2 = document.createElement("h2")
    h2.innerText = this.trainer.name
    h2.setAttribute("trainerId", `${this.trainer.id}`)
    this.div.appendChild(h2)
    this.trainer.pokemons.forEach(pokemon => {
      pokemon = new Pokemon(pokemon)
      pokemon.renderPokemon()
      // console.log(pokemon)
      // pokemon.renderPokemon()
    })
    console.log(this.trainer.pokemons)
  }

}
