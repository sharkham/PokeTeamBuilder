class Trainers {
  constructor(entries, trainersprites){
    this.trainers = []
    this.adapter = new TrainersAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadTrainers()
    this.entries = entries
    this.trainersprites = trainersprites


  }

  initBindingsAndEventListeners() {
    this.div = document.getElementById("trainer-view")
    this.form = document.getElementById("trainer-select-form")
    this.form.addEventListener("change", this.updateTrainer.bind(this))
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
    this.trainersprites.enableField()
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

  updateTrainer(e) {
    const spriteNum = e.target.value
    const sprite = this.trainersprites.trainersprites[spriteNum-1]
    console.log(sprite)
    this.adapter.updateTrainer(this.trainer.id, sprite).then(trainer => {
      const trainerSprite = document.getElementById("trainersprite")
      trainerSprite.setAttribute("src", trainer.image)
      trainer = new Trainer(trainer)
      trainer.renderTrainerInControlBox()
      // const pokeSprite = document.getElementById(`pokesprite${boxNumber}`)
      // pokeSprite.setAttribute("src", pokemon.image)
      // pokemon.setSpriteHeight(pokeSprite)

      // pokemon.renderPokemonInControlBox()
    })
    console.log(spriteNum)
  }

  // updatePokemon(pokemonObj, entryNum, boxNumber) {
  //   const pokedexEntry = this.pokedex.entries[entryNum-1]
  //   this.adapter.updatePokemon(pokemonObj.id, pokedexEntry).then(pokemon => {

  //     // console.log(pokemonObj)
  //     // console.log(this.trainer.pokemons)
  //     this.trainer.updateTrainersPokemons(pokemon)
  //     pokemon = new Pokemon(pokemon)
  //     //find image by box number and replace image
  //     const pokeSprite = document.getElementById(`pokesprite${boxNumber}`)
  //     pokeSprite.setAttribute("src", pokemon.image)
  //     pokemon.setSpriteHeight(pokeSprite)
  //     // console.log(pokemon)
  //     pokemon.renderPokemonInControlBox()
  //     // console.log(this.pokemons)
  //     //go through array of trainer's pokemon and swap out for new pokemon that gets returned
  //     //index_of method in JavaScript index_of old Pokémon object, return that number,
  //     //take trainer.pokemons array at that square bracket index and replace it
  //   })
  // }
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
