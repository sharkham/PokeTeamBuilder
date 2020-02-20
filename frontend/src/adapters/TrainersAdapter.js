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
      image: "images/trainersprites/1.png",
      //don't hard code this later! OR hardcode defauly only
      height: 16,
      zindex: 0,
      position: "static"
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

  updateTrainerSprite(trainerId, sprite) {
    const trainer = {
      image: sprite.image
    }
    return fetch(`${this.baseUrl}/${trainerId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ trainer: trainer })
    }).then(res => {
      // console.log(res.json())
      return res.json()
    }).catch(error => console.error(error))
  }

  updateTrainerPosition(trainerId, zindex, xaxis, yaxis) {
    const trainer = {
      zindex: zindex,
      xaxis: xaxis,
      yaxis: yaxis,
      position: "absolute"
    }
    return fetch(`${this.baseUrl}/${trainerId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ trainer: trainer })
    }).then(res => {
      return res.json()
    }).catch(error => console.error(error))
  }

}
