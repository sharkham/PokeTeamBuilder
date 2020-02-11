class Pokemon {
  constructor(entryJSON) {
    this.id = entryJSON.id
    this.name = entryJSON.name
    this.image = entryJSON.image
    this.height = entryJSON.height

    //set these to defaults on render, somehow depending on which select they come from
    // this.xaxis =
    // this.yaxis =
    // this.zindex =

    //pull this from the page somehow
    // this.trainer_id =
  }

  renderPokemon(){
    console.log(this.name)
  }
}
