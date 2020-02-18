class Trainersprites {
  constructor(){
    this.trainersprites = []
    // this.selectFields = []
    this.adapter = new TrainerspritesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadTrainersprites()
  }

  initBindingsAndEventListeners() {
    this.form = document.getElementById("select-form")
    this.trainerselect = document.getElementById("trainerspriteselect")
  }

  fetchAndLoadTrainersprites() {
    this.adapter.getTrainersprites()
    .then(trainersprites => {
      trainersprites.forEach(trainersprite => this.trainersprites.push(new Trainersprite(trainersprite)))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    // let select = document.createElement("select")
    // select.setAttribute("id", "trainerspriteselect")
    // select.setAttribute("disabled", "true")
    // this.selectFields.push(select)
    this.trainersprites.forEach(trainersprite => {
      this.trainerselect.options[this.trainerselect.options.length] = new Option(`${trainersprite.id}`, `${trainersprite.id}`, false, false)
    })
    // this.selectMenu.appendChild(form)
    // this.form.appendChild(select)
  }

  enableField() {
    // console.log("trainer sprite field enabled")
    this.field = document.getElementById("trainerspriteselect")
    this.field.removeAttribute("disabled")
  }
}
