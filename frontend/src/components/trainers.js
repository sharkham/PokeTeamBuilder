class Trainers {
  constructor(entries){
    this.trainers = []
    this.adapter = new TrainersAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadTrainers()
    // this.fetchAndLoadTrainer()
    //Gotta make the "fetch and load" part of an event listener on page
    //make login/signup form
    this.entries = entries
    //this just fires when the thing starts. Going to have to find a way to login/signup first to fire it.
  }

  initBindingsAndEventListeners() {
    this.div = document.getElementById("trainer-view")
    this.h2 = document.getElementById("trainername")
    this.loginField = document.getElementById("trainerlogin")
    this.login = document.getElementById("login")
    this.login.addEventListener("submit", this.fetchAndLoginTrainer.bind(this))
  }

  fetchAndLoadTrainers() {
    this.adapter.getTrainers()
    .then(trainers => {
      trainers.forEach(trainer => this.trainers.push(trainer))
    })
    .then(() => {
      console.log(this.trainers)
    })
  }

  // fetchAndLoadEntries() {
  //   this.adapter.getEntries()
  //   .then(entries => {
  //     entries.forEach(entry => this.entries.push(new Entry(entry)))
  //   })
  //   .then(() => {
  //     this.render()
  //   })
  // }

  // findTrainer(trainer, value) {
  //   trainer.name === value
  // }

  fetchAndLoginTrainer(e) {
    e.preventDefault()
    const value = this.loginField.value
    //iterate over this.trainers and find object where value is name.
    const trainerObj = this.trainers.find(trainer => trainer.name === value)
    // const trainerId = this.trainers.find(({name}) => { name === value })
    const trainerId = trainerObj.id
    this.adapter.getTrainer(trainerId)
    .then(trainer => {
      this.trainer = new Trainer(trainer)
    })
    .then(() => {
      this.renderTrainer()
    })
    // console.log(value)
    // this.adapter.getTrainer(1)
    // //this (above) should NOT be hardcoded.
    // .then(trainer => {
    //   this.trainer = new Trainer(trainer)
    //   // trainers.forEach(entry => this.trainers.push(new Entry(entry)))
    // })
    // .then(() => {
    //   this.renderTrainer()
    // })
  }

  renderTrainer() {
    // let h2 = document.createElement("h2")
    this.h2.innerText = this.trainer.name
    this.h2.setAttribute("id", "trainername")
    this.h2.setAttribute("trainerid", `${this.trainer.id}`)
    this.pokemons = new Pokemons(this.entries, this.trainer)
    // this.div.appendChild(h2)
    // this.trainer.pokemons.forEach(pokemon => {
    //   pokemon = new Pokemon(pokemon)
    //   pokemon.renderPokemon()
    //   // is this the place for this to be happening?
    // })
  }

}
