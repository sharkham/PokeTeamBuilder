class Pokemon {
  constructor(entryJSON) {
    this.id = entryJSON.id
    this.name = entryJSON.name
    this.image = entryJSON.image
    this.icon = entryJSON.icon
    this.height = entryJSON.height
    this.number = entryJSON.number
    this.pokedexid = entryJSON.number
    //set these to defaults on render, somehow depending on which select they come from
    this.xaxis = entryJSON.xaxis
    this.yaxis = entryJSON.yaxis
    this.zindex = entryJSON.zindex
    this.position = entryJSON.position

    //pull this from the page somehow
    // this.trainer_id =
  }

  viewBoxSprite(){
    const image = document.createElement("img")
    image.setAttribute("src", this.image)
    image.setAttribute("id", `pokesprite${this.number}`)
    image.style.position = this.position
    image.style.zIndex = this.zindex
    image.style.left = `${this.xaxis}px`
    image.style.top = `${this.yaxis}px`
    this.setSpriteHeight(image)
    return image
  }

  renderPokemonInControlBox() {
    const controlBoxDiv = document.getElementById(`control-poke-${this.number}`)
    controlBoxDiv.innerHTML = `<img src="${this.icon}" class="controlboxicon">`
    const pokeSelect = document.getElementById(`poke${this.number}`)
    // pokeSelect.value = this.pokedexid
  }

  setSpriteHeight(image) {
    let spriteHeight = Math.round((this.height * 57)/15)
    if (spriteHeight > 500) {
      spriteHeight = Math.round((spriteHeight * .75))
    }
    image.style.height = `${spriteHeight}px`
  }
}
