class App {
  constructor(){

    this.entries = new Entries()
    this.trainersprites = new Trainersprites()
    // console.log(this.entries)
    this.trainers = new Trainers(this.entries, this.trainersprites)
    this.initBindingsAndEventListeners()

    //comment out Pokémons--they will have to be booted up from Trainers when a trainer is created or logged in
    // this.pokemons = new Pokemons(this.entries)
    //pokemons needs to load with trainer as well.
  }

    initBindingsAndEventListeners() {
      this.dropdownAboutDiv = document.getElementById("dropdownAboutDiv")
      this.dropdownAboutButton = document.getElementById("dropdownAboutButton")
      this.dropdownAboutButton.addEventListener("click", this.showHideAbout.bind(this))
    }

    //Helper methods for dropdowns

    showHideAbout() {
      this.dropdownAboutDiv.classList.toggle("show");
      // document.getElementById("myDropdown").classList.toggle("show");
    }

    closeDropDown(e) {

      if (!e.target.matches('#dropdownAboutDiv')) {
        let dropdownAboutDiv = document.getElementById("dropdownAboutDiv");
        if (dropdownAboutDiv.classList.contains('show')) {
          dropdownAboutDiv.classList.remove('show');
        }
      }
    }

  //this is maybe where to put the: make or find trainer thing.
}
