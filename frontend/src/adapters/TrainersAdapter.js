class TrainersAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/trainers'
  }

  getTrainers() {
    return fetch(this.baseUrl).then(res => {
      // memoizedEntries = res.json()
      return res.json()
    })
  }
  }

  getTrainer(trainerId) {
    return fetch(`${this.baseUrl}/${trainerId}`).then(res => res.json())
  }
}
