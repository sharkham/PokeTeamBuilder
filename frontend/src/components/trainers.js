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
    this.loginSubmit = document.getElementById("submitlogin")
    this.login = document.getElementById("login")
    this.login.addEventListener("submit", this.fetchAndLoginTrainer.bind(this))
    this.signupField = document.getElementById("trainersignup")
    this.signupSubmit = document.getElementById("submitsignup")
    this.signup = document.getElementById("signup")
    this.signup.addEventListener("submit", this.createAndLoginTrainer.bind(this))
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

  createAndLoginTrainer(e) {
    e.preventDefault()
    const name = this.signupField.value
    const trainerObj = this.trainers.find(trainer => trainer.name === name)
    if (!trainerObj) {
      this.adapter.createTrainer(name)
      .then(trainer => {
        this.trainer = new Trainer(trainer)
      })
      .then(() => {
        this.setTrainer()
      })
    } else {
      alert(`${name} is an existing trainer. Please try again or login!`)
    }
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
        this.setTrainer()
      })
    } else {
      alert(`${value} is not an existing trainer. Please try again or create a new trainer!`)
    }
  }

  setTrainer() {
    this.trainer.renderTrainer()
    this.trainer.renderTrainersPokemons(this.entries)
    this.entries.enableFields()
    this.signupField.value = ""
    this.disableSignupFields()
    this.loginField.value = ""
    this.disableLoginFields()
  }

  disableLoginFields() {
    this.loginField.setAttribute("disabled", "true")
    this.loginSubmit.setAttribute("disabled", "true")
  }

  disableSignupFields() {
    this.signupField.setAttribute("disabled", "true")
    this.signupSubmit.setAttribute("disabled", "true")
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
