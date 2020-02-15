class Pokemon {
  constructor(entryJSON) {
    this.id = entryJSON.id
    this.name = entryJSON.name
    this.image = entryJSON.image
    this.icon = entryJSON.icon
    this.height = entryJSON.height
    this.number = entryJSON.number
    //set these to defaults on render, somehow depending on which select they come from
    // this.xaxis =
    // this.yaxis =
    // this.zindex =

    //pull this from the page somehow
    // this.trainer_id =
  }

  viewBoxSprite(){
    const image = document.createElement("img")
    image.setAttribute("src", this.image)
    image.setAttribute("id", `pokesprite${this.number}`)
    this.setSpriteHeight(image)
    return image
    // return `<img src="${this.image}">`
    // console.log("hey!")
    // //this is where to display the image of them but double check how this happens.
    // let image = document.createElement("img")
    // image.setAttribute("src", this.image)
    // console.log(this.name)
  }

  renderPokemonInControlBox() {
    const controlBoxDiv = document.getElementById(`control-poke-${this.number}`)
    controlBoxDiv.innerHTML = `<img src="${this.icon}" class="controlboxicon">`
    // const image = document.createElement("img")
    // image.setAttribute("src", this.image)
    //change to this.icon later
    // image.setAttribute("class", "controlboxicon")
  }

  setSpriteHeight(image) {
    image.style.height = `${(this.height * 57)/15}px`
    // const size = (this.height * 57)/15
    // return `${(this.height * 57)/15}px`
  }
}
