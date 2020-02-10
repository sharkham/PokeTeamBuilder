class SpeciesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/species'
  }

  getSpecies() {
    return fetch(this.baseUrl).then(res => res.json())
  }
}
