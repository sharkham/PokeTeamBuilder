class TrainersAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/trainers'
  }

  getTrainer(trainerId) {
    return fetch(`${this.baseUrl}/${trainerId}`).then(res => res.json())
  }
}
