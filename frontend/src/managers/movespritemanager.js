class MoveSpriteManager {
  constructor() {
  }


  //Moving Sprites Functions
  onDragStart(e) {
    e.preventDefault()
  }

  onMouseDown(e) {
    e.preventDefault()
    let movingSprite = e.target
    if (movingSprite.id.includes("sprite")) {
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

}
