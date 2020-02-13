class Trainers {
  constructor(entries){
    this.trainers = []
    this.adapter = new TrainersAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadTrainers()
    this.entries = entries
  }

  initBindingsAndEventListeners() {
    this.div = document.getElementById("trainer-view")
    // this.h2 = document.getElementById("trainername")
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
      // console.log(this.trainers)
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
        this.trainer.renderTrainer()
        this.trainer.renderTrainersPokemons(this.entries)
      })
    } else {
      alert(`${value} is not an existing trainer. Please try again or create a new trainer!`)
    }
  }

  // renderPokemons() {
  //   this.pokemons = new Pokemons(this.entries, this.trainer)
  // }

  // renderTrainer() {
  //   this.h2.innerText = this.trainer.name
  //   this.h2.setAttribute("id", "trainername")
  //   this.h2.setAttribute("trainerid", `${this.trainer.id}`)
  //   this.pokemons = new Pokemons(this.entries, this.trainer)
  // }

}
