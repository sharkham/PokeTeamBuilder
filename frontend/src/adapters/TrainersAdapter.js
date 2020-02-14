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

  getTrainer(trainerId) {
    return fetch(`${this.baseUrl}/${trainerId}`).then(res => res.json())
  }

  createTrainer(name) {
    const trainer = {
      name: name,
      image: "images/trainersprites/34.png",
      //don't hard code this later! OR hardcode defauly only
      height: 16,
      // xaxis: sizeValues[x],
      // yaxis: [y],
      // zindex: [z],
    }
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ trainer })
    }).then(res => res.json())
  }
}
