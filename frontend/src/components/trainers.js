class Trainers {
  constructor(){
    this.trainers = []
    this.adapter = new TrainersAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadTrainer()
  }



}
