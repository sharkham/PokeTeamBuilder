class App {
  constructor(){
    this.entries = new Entries()
    // console.log(this.entries)
    this.trainers = new Trainers()
    this.pokemons = new Pokemons(this.entries)
    //pokemons needs to load with trainer as well.
  }


  //this is maybe where to put the: make or find trainer thing.
}
