class App {
  constructor(){

    this.entries = new Entries()
    // this.trainersprites = new Trainersprites()
    // console.log(this.entries)
    this.trainers = new Trainers(this.entries, this.trainersprites)

    //comment out Pokémons--they will have to be booted up from Trainers when a trainer is created or logged in
    // this.pokemons = new Pokemons(this.entries)
    //pokemons needs to load with trainer as well.
  }


  //this is maybe where to put the: make or find trainer thing.
}
