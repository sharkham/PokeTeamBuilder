class App {
  constructor(){

    this.entries = new Entries()
    this.trainersprites = new Trainersprites()
    // console.log(this.entries)
    this.trainers = new Trainers(this.entries, this.trainersprites)
    // this.initBindingsAndEventListeners()

    //comment out Pokémons--they will have to be booted up from Trainers when a trainer is created or logged in
    // this.pokemons = new Pokemons(this.entries)
    //pokemons needs to load with trainer as well.
  }

    // initBindingsAndEventListeners() {
    //   // this.dropdownLoginDiv = document.getElementById("dropdownLoginDiv")
    //   // this.dropdownLoginButton = document.getElementById("dropdownLoginButton")
    //   // this.dropdownLoginButton.addEventListener("click", this.showHideLogin.bind(this))
    //   // this.dropdownSignupDiv = document.getElementById("dropdownSignupDiv")
    //   // this.dropdownSignupButton = document.getElementById("dropdownSignupButton")
    //   // this.dropdownSignupButton.addEventListener("click", this.showHideSignup.bind(this))
    //   this.dropdownAboutDiv = document.getElementById("dropdownAboutDiv")
    //   this.dropdownAboutButton = document.getElementById("dropdownAboutButton")
    //   this.dropdownAboutButton.addEventListener("click", this.showHideAbout.bind(this))
    // }

    //Helper methods for dropdowns
    // showHideLogin() {
    //   this.dropdownLoginDiv.classList.toggle("show");
    // }

    // showHideSignup() {
    //   this.dropdownSignupDiv.classList.toggle("show");
    //   // document.getElementById("myDropdown").classList.toggle("show");
    // }

    // showHideAbout() {
    //   this.dropdownAboutDiv.classList.toggle("show");
    //   // document.getElementById("myDropdown").classList.toggle("show");
    // }



    // closeDropDown(e) {
    //   // if (!e.target.matches('.dropdownLogin')) {
    //   //   let dropdownLoginDiv = document.getElementById("dropdownLoginDiv");
    //   //   if (dropdownLoginDiv.classList.contains('show')) {
    //   //     dropdownLoginDiv.classList.remove('show');
    //   //   }
    //   // }
    //   // if (!e.target.matches('.dropdownSignup')) {
    //   //   let dropdownSignupDiv = document.getElementById("dropdownSignupDiv");
    //   //   if (dropdownSignupDiv.classList.contains('show')) {
    //   //     dropdownSignupDiv.classList.remove('show');
    //   //   }
    //   // }
    //   if (!e.target.matches('.dropdownAbout')) {
    //     let dropdownAboutDiv = document.getElementById("dropdownAboutDiv");
    //     if (dropdownAboutDiv.classList.contains('show')) {
    //       dropdownAboutDiv.classList.remove('show');
    //     }
    //   }
    // }

  //this is maybe where to put the: make or find trainer thing.
}
