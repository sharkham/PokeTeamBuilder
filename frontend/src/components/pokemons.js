class Pokemons {
  constructor(entries, trainer){
    this.trainer = trainer
    this.pokemons = this.trainer.pokemons
    //this needs to load with the trainer's Pokemon.
    this.adapter = new PokemonsAdapter()
    this.initBindingsAndEventListeners()
    // this.fetchAndLoadPokemons()
    this.pokedex = entries
    this.render()
    //this needs to load with trainer. Pokemons need to load with trainer
  }

  initBindingsAndEventListeners() {
    document.getElementsByTagName("H1")[0].getAttribute("class")
    // //find the trainer from id put on page??
    this.form = document.getElementById("select-form")
    this.form.addEventListener("change", this.createOrUpdatePokemon.bind(this))
    this.view = document.getElementById("view-box")
    //moving Pokémon sprites
    // document.addEventListener("mousedown", this.movePokemonTest.bind(this))
    document.addEventListener("mousedown", this.onMouseDown.bind(this))
    document.addEventListener("mousemove", this.onMouseMove.bind(this))
    document.addEventListener("mouseup", this.onMouseUp.bind(this))
    // this.isMoving = false
    this.view.addEventListener("dragstart", this.onDragStart.bind(this))
    // this.view.addEventListener("dragend", this.onDragDrop.bind(this))
    //createPokemon here needs to change to a function that will create or post based on whether a Pokémon exists or not.
    //binding this here makes "this" the pokemons class so it can be used in createPokemon function
  }

  onDragStart(e) {
    e.preventDefault()
  }

  onMouseDown(e) {
    let movingSprite = e.target
    if (movingSprite.id.includes("pokesprite")) {
      console.log(movingSprite)
      movingSprite.style.position = "absolute"
      function moveAt(pageX, pageY) {
        movingSprite.style.left = pageX - movingSprite.offsetWidth / 2 + 'px';
        movingSprite.style.top = pageY - movingSprite.offsetHeight / 2 + 'px';
      }
      moveAt(event.pageX, event.pageY)
      this.isMoving = true
    }
  }

  onMouseMove(e) {
    let movingSprite = e.target
    if (this.isMoving === true) {
      console.log("movement!")
      function moveAt(pageX, pageY) {
        movingSprite.style.left = pageX - movingSprite.offsetWidth / 2 + 'px';
        movingSprite.style.top = pageY - movingSprite.offsetHeight / 2 + 'px';
      }
      moveAt(event.pageX, event.pageY)
    }
  }

  onMouseUp(e) {
    if (this.isMoving === true) {
      this.isMoving = false
      console.log("up!")
    }
  }

  // movePokemon() {

  // }


  // onDragStart(e) {
  //   //abstract this into a helper method somehow so code isn't repeated between trainers and Pokémon?
  //   if (e.target.id.includes("pokesprite")) {
  //     console.log(e.target)
  //     // let xPos = e.target.offsetTop
  //     // // let yPos = e.target.offset.top
  //     // console.log(xPos)
  //     // console.log(yPos)
  //   }
  //   // console.log("drag start")
  // }

  // onDragDrop(e) {
  //   e.preventDefault()
  //   if (e.target.id.includes("pokesprite")) {
  //     // console.log(e.screenX)
  //     e.target.style.position = "absolute"
  //     e.target.style.top = `${e.pageX}px`
  //     console.log(e.target.style.top)
  //     // let yPos = e.target.offset.top
  //     // console.log(e.screenY)
  //     // console.log(yPos)
  //   }
  // }

  createOrUpdatePokemon(e) {
    //iterate through this.pokemons--a "find" for a Pokémon with the boxnumber
    if (e.target.className === "pokeselect") {
      const boxNumber = parseInt(e.target.id[e.target.id.length-1], 10)
      const entryNum = e.target.value
      const pokemonObj = this.pokemons.find(pokemon => pokemon.number === boxNumber)
      if (!!pokemonObj) {
        this.updatePokemon(pokemonObj, entryNum, boxNumber)
      } else {
        this.createPokemon(entryNum, boxNumber)
      }
    }
    // console.log(e.target)

  }

  updatePokemon(pokemonObj, entryNum, boxNumber) {
    const pokedexEntry = this.pokedex.entries[entryNum-1]
    this.adapter.updatePokemon(pokemonObj.id, pokedexEntry).then(pokemon => {

      // console.log(pokemonObj)
      // console.log(this.trainer.pokemons)
      this.trainer.updateTrainersPokemons(pokemon)
      pokemon = new Pokemon(pokemon)
      //find image by box number and replace image
      const pokeSprite = document.getElementById(`pokesprite${boxNumber}`)
      pokeSprite.setAttribute("src", pokemon.image)
      pokemon.setSpriteHeight(pokeSprite)
      // console.log(pokemon)
      pokemon.renderPokemonInControlBox()
      // console.log(this.pokemons)
      //go through array of trainer's pokemon and swap out for new pokemon that gets returned
      //index_of method in JavaScript index_of old Pokémon object, return that number,
      //take trainer.pokemons array at that square bracket index and replace it
    })
  }

  createPokemon(entryNum, boxNumber) {
    const pokedexEntry = this.pokedex.entries[entryNum-1]
    this.adapter.createPokemon(this.trainer.id, pokedexEntry, boxNumber).then(pokemon => {
      this.pokemons.push(pokemon)
      pokemon = new Pokemon(pokemon)
      this.view.appendChild(pokemon.viewBoxSprite())
      pokemon.renderPokemonInControlBox()
      // this.view.innerHTML += pokemon.viewBoxHTML()
      // console.log(this.pokemons)
      // pokemon.renderPokemonInViewBox()
    })
  }

  render() {
    // this.view.innerHTML = ""
    //clear existing stuff and then re-render
    // console.log(this.pokemons)
    this.pokemons.forEach(pokemon => {
      pokemon = new Pokemon(pokemon)
      this.view.appendChild(pokemon.viewBoxSprite())
      let testVar = document.getElementById(`pokesprite${pokemon.number}`)
      // console.log(testVar.clientHeight)
      pokemon.renderPokemonInControlBox()
      // this.view.innerHTML += pokemon.viewBoxHTML()
      // is this the place for this to be happening?
    })
  }

  // movePokemonTest(e) {
  //   this.movingSprite = e.target
  //   let shiftX = event.clientX - this.movingSprite.getBoundingClientRect().left;
  //   let shiftY = event.clientY - this.movingSprite.getBoundingClientRect().top;

  //   this.movingSprite.style.position = 'absolute';
  //   this.movingSprite.style.zIndex = 1000;
  //   document.body.append(this.movingSprite);

  //   moveAt(event.pageX, event.pageY);

  //   // moves the this.movingSprite at (pageX, pageY) coordinates
  //   // taking initial shifts into account
  //   function moveAt(pageX, pageY) {
  //     this.movingSprite.style.left = pageX - shiftX + 'px';
  //     this.movingSprite.style.top = pageY - shiftY + 'px';
  //   }

  //   function onMouseMove(event) {
  //     moveAt(event.pageX, event.pageY);
  //   }

  //   // move the this.movingSprite on mousemove
  //   this.view.addEventListener('mousemove', onMouseMove);

  //   // drop the this.movingSprite, remove unneeded handlers
  //   this.movingSprite.onmouseup = () => {
  //     this.view.removeEventListener('mousemove', onMouseMove);
  //     this.movingSprite.onmouseup = null;
  //   };
  //   this.movingSprite.ondragstart = () => {false}
  // }


}

//rendering the Pokémon is not DRY here




// onMouseMove(e) {
//   moveAt(event.pageX, event.pageY);
//   // console.log("moving")
//   // if (e.target.id.includes("pokesprite")) {
//   //   console.log("moving")
//   // }
// }

// onMouseUp(e) {
//   console.log("up")
// }
