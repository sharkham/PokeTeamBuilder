class Trainers {
  constructor(){
    this.trainer = []
    this.adapter = new TrainersAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadTrainer()
    //this just fires when the thing starts. Going to have to find a way to login/signup first to fire it.
  }

  fetchAndLoadTrainer() {
    this.adapter.getTrainer(1)
    .then(trainer => {
      this.trainer = new Trainer(trainer)
      // trainers.forEach(entry => this.trainers.push(new Entry(entry)))
    })
    .then(() => {
      this.render()
    })
  }

}
