class MoveSpriteManager {
  constructor() {
    this.initSpriteBindingsAndEventListeners()
  }

  initSpriteBindingsAndEventListeners() {
    this.view = document.getElementById("view-box")
    //moving Pokémon sprites
    this.view.addEventListener("mousedown", this.onMouseDown.bind(this))
    this.view.addEventListener("mousemove", this.onMouseMove.bind(this))
    this.view.addEventListener("mouseup", this.onMouseUp.bind(this))
    this.view.addEventListener("dragstart", this.onDragStart.bind(this))
  }

  //Moving Pokémon Sprites Functions
  onDragStart(e) {
    e.preventDefault()
  }

  onMouseDown(e) {
    e.preventDefault()
    let movingSprite = e.target
    if (movingSprite.id.includes("prite")) {
      console.log(movingSprite)
      movingSprite.style.position = "absolute"
      movingSprite.style.zIndex = parseInt(movingSprite.style.zIndex, 10) + 7
      function moveAt(pageX, pageY) {
        movingSprite.style.left = Math.round(pageX - movingSprite.offsetWidth / 2) + 'px';
        movingSprite.style.top = Math.round(pageY - movingSprite.offsetHeight / 2) + 'px';
      }
      moveAt(event.pageX, event.pageY)
      this.isMoving = true
    }
  }

  onMouseMove(e) {
    e.preventDefault()
    let movingSprite = e.target
    // console.log(movingSprite.id.includes("pokesprite"))
    if (this.isMoving === true && movingSprite.id.includes("sprite")) {
      // console.log("movement!")
      function moveAt(pageX, pageY) {
        movingSprite.style.left = Math.round(pageX - movingSprite.offsetWidth / 2) + 'px';
        movingSprite.style.top = Math.round(pageY - movingSprite.offsetHeight / 2) + 'px';
      }
      moveAt(event.pageX, event.pageY)
    }
  }

  onMouseUp(e) {
    let movingSprite = e.target
    e.preventDefault()
    if (this.isMoving === true && movingSprite.id.includes("sprite")) {
      this.isMoving = false
      if (movingSprite.id.includes("pokesprite")) {
        this.updatePokemonPosition(e)
      } else if (movingSprite.id === "trainersprite") {
        this.updateTrainerPosition(e)
      }
      // console.log("up!")
    }
  }
}
