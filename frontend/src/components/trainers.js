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
    //for displaying trainer name
    // this.div = document.getElementById("trainer-view")
    //for updating trainer sprite
    this.form = document.getElementById("select-form")
    this.form.addEventListener("change", this.updateTrainerSprite.bind(this))
    //for signing up or logging in trainer
    this.loginField = document.getElementById("trainerlogin")
    this.loginSubmit = document.getElementById("submitlogin")
    this.login = document.getElementById("login")
    this.login.addEventListener("submit", this.fetchAndLoginTrainer.bind(this))
    this.signupField = document.getElementById("trainersignup")
    this.signupSubmit = document.getElementById("submitsignup")
    this.signup = document.getElementById("signup")
    this.signup.addEventListener("submit", this.createAndLoginTrainer.bind(this))
    this.loginsignupFields = document.getElementById("trainer-set")
    //for moving trainer sprite
    this.view = document.getElementById("view-box")
    this.view.addEventListener("mousedown", this.onMouseDown.bind(this))
    this.view.addEventListener("mousemove", this.onMouseMove.bind(this))
    this.view.addEventListener("mouseup", this.onMouseUp.bind(this))
    this.view.addEventListener("dragstart", this.onDragStart.bind(this))
    //for toggling dropdown menus
    // this.dropdownLoginLi = document.getElementById("dropdownLoginLi")
    // this.dropdownLoginButton = document.getElementById("dropdownLoginButton")
    // this.dropdownLoginDiv = document.getElementById("dropdownLoginDiv")
    // this.dropdownLoginButton.addEventListener("click", this.showHideLogin.bind(this))
    // // this.dropdownSignupLi = document.getElementById("dropdownSignupLi")
    // this.dropdownSignupButton = document.getElementById("dropdownSignupButton")
    // this.dropdownSignupDiv = document.getElementById("dropdownSignupDiv")
    // this.dropdownSignupButton.addEventListener("click", this.showHideSignup.bind(this))
    // this.body = document.body
    // this.body.addEventListener("click", this.closeDropDown.bind(this))
    // //about menu things
    // this.dropdownAboutDiv = document.getElementById("dropdownAboutDiv")
    // this.dropdownAboutButton = document.getElementById("dropdownAboutButton")
    // this.dropdownAboutButton.addEventListener("click", this.showHideAbout.bind(this))
  }

  fetchAndLoadTrainers() {
    this.adapter.getTrainers()
    .then(trainers => {
      trainers.forEach(trainer => this.trainers.push(trainer))
    })
    .then(() => {

    })
  }

  createAndLoginTrainer(e) {
    e.preventDefault()
    const name = this.signupField.value
    const trainerObj = this.trainers.find(trainer => trainer.name === name)
    if (!trainerObj) {
      // this.collapseSignup()
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
      // this.collapseLogin()
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
    this.loginsignupFields.style.display = "none"

  }

  disableLoginFields() {
    this.loginField.setAttribute("disabled", "true")
    this.loginSubmit.setAttribute("disabled", "true")
  }

  disableSignupFields() {
    this.signupField.setAttribute("disabled", "true")
    this.signupSubmit.setAttribute("disabled", "true")
  }

  updateTrainerSprite(e) {
    if (e.target.className === "trainerselect") {
      const spriteNum = e.target.value
      const sprite = this.trainersprites.trainersprites[spriteNum-1]
      this.adapter.updateTrainerSprite(this.trainer.id, sprite).then(trainer => {
        const trainerSprite = document.getElementById("trainersprite")
        trainerSprite.setAttribute("src", trainer.image)
        trainer = new Trainer(trainer)
        trainer.renderTrainerInControlBox()
      })
    }

  }

  //Moving Trainer Sprite functions

  onDragStart(e) {
    e.preventDefault()
  }

  onMouseDown(e) {
    e.preventDefault()
    let movingSprite = e.target
    if (movingSprite.id === "trainersprite") {
      console.log(movingSprite)
      movingSprite.style.position = "absolute"
      movingSprite.style.zIndex = parseInt(movingSprite.style.zIndex, 10) + 7
      function moveAt(pageX, pageY) {
        movingSprite.style.left = Math.round(pageX - movingSprite.offsetWidth / 2) + 'px';
        movingSprite.style.top = Math.round(pageY - movingSprite.offsetHeight / 2) + 'px';
      }
      moveAt(event.pageX, event.pageY)
      this.isMoving = true
    }
  }

  onMouseMove(e) {
    e.preventDefault()
    let movingSprite = e.target
    // console.log(movingSprite.id.includes("pokesprite"))
    if (this.isMoving === true && movingSprite.id === "trainersprite") {
      // console.log("movement!")
      function moveAt(pageX, pageY) {
        movingSprite.style.left = Math.round(pageX - movingSprite.offsetWidth / 2) + 'px';
        movingSprite.style.top = Math.round(pageY - movingSprite.offsetHeight / 2) + 'px';
      }
      moveAt(event.pageX, event.pageY)
    }
  }

  onMouseUp(e) {
    let movingSprite = e.target
    e.preventDefault()
    if (this.isMoving === true && movingSprite.id === "trainersprite") {
      this.isMoving = false
      this.updateTrainerPosition(e)
      // console.log("up!")
    }
  }

  updateTrainerPosition(e) {
    console.log("update trainer position firing")
    // const movingSpriteNum = parseInt(e.target.id[e.target.id.length-1])
    // const pokemonObj = this.pokemons.find(pokemon => pokemon.number === movingSpriteNum)
    const zindex = e.target.style.zIndex
    const xaxis = e.target.style.left
    const yaxis = e.target.style.top
    this.adapter.updateTrainerPosition(this.trainer.id, zindex, xaxis, yaxis)
  }

  //Helper methods for dropdowns

  // showHideSignup() {
  //   this.dropdownSignupDiv.classList.toggle("show");
  // }

  // showHideLogin() {
  //   this.dropdownLoginDiv.classList.toggle("show");
  // }

  // showHideAbout() {
  //   this.dropdownAboutDiv.classList.toggle("show");
  // }

  // closeDropDown(e) {
  //   //what I want:
  //   // if event target is NOT dropdownLoginButton or dropdownLoginDiv, if dropdownLoginDiv is showing, hide it
  //   //if event target is NOT dropdownSignupButton or dropdownSignupDiv, if dropdownSignupDiv is showing, hide it

  //   if (!e.target.matches('.dropdownLogin')) {
  //     let dropdownLoginDiv = document.getElementById("dropdownLoginDiv");
  //     if (dropdownLoginDiv.classList.contains('show')) {
  //       dropdownLoginDiv.classList.remove('show');
  //     }
  //   }
  //   if (!e.target.matches('.dropdownSignup')) {
  //     let dropdownSignupDiv = document.getElementById("dropdownSignupDiv");
  //     if (dropdownSignupDiv.classList.contains('show')) {
  //       dropdownSignupDiv.classList.remove('show');
  //     }
  //   }
  //   if (!e.target.matches('.dropdownAbout')) {
  //     let dropdownAboutDiv = document.getElementById("dropdownAboutDiv");
  //     if (dropdownAboutDiv.classList.contains('show')) {
  //       dropdownAboutDiv.classList.remove('show');
  //     }
  //   }
  // }
  // Close the dropdown if the user clicks outside of it
  // window.onclick = function(e) {
  //   if (!e.target.matches('.dropbtn')) {
  //   var myDropdown = document.getElementById("myDropdown");
  //     if (myDropdown.classList.contains('show')) {
  //       myDropdown.classList.remove('show');
  //     }
  //   }
  // }

  // collapseSignup() {
  //   console.log("collapse signup here")
  //   // this.dropdownSignupLi.classList.remove("show")
  //   // this.dropdownSignupButton.setAttribute("aria-expanded", "false")
  //   // this.dropdownSignupDiv.classList.remove("show")
  // }

  // collapseLogin() {
  //   console.log("collapse login here")
  //   // this.dropdownLoginLi.classList.remove("show")
  //   // this.dropdownLoginButton.setAttribute("aria-expanded", "false")
  //   // this.dropdownLoginDiv.classList.remove("show")
  // }

  // switchToLoggedInNav() {
  //   //to hide login signup fields and display trainer name
  //   this.loginsignupFields.style.display = "none"

  // }


}
