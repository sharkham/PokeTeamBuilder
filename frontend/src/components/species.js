class Species {
  constructor(){
    this.species = []
    this.adapter = new SpeciesAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadSpecies()
  }

  fetchAndLoadSpecies() {
    this.adapter.getSpecies().then(species => {
      console.log(species)
    })
  }
}
