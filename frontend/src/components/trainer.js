class Trainer {
  constructor(entryJSON) {
    this.id = entryJSON.id
    this.name = entryJSON.name
    this.image = entryJSON.image
    this.height = entryJSON.height
    this.pokemons = entryJSON.pokemons

    //set these to defaults on render, somehow depending on which select they come from
    // this.xaxis =
    // this.yaxis =
    // this.zindex =
  }
}
