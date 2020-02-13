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

  fetchAndLoginTrainer(e) {
    e.preventDefault()
    const value = this.loginField.value
    const trainerObj = this.trainers.find(trainer => trainer.name === value)
    if (!!trainerObj) {
      const trainerId = trainerObj.id
      this.adapter.getTrainer(trainerId)
      .then(trainer => {
        this.trainer = new Trainer(trainer)
      })
      .then(() => {
        this.renderTrainer()
      })
    } else {
      console.log("Who dis?")
    }

  }

  renderTrainer() {
    this.h2.innerText = this.trainer.name
    this.h2.setAttribute("id", "trainername")
    this.h2.setAttribute("trainerid", `${this.trainer.id}`)
    this.pokemons = new Pokemons(this.entries, this.trainer)
  }

}
