class Entries {
  constructor(){
    this.entries = []
    this.adapter = new EntriesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadEntries()
  }

  initBindingsAndEventListeners() {
    // this.selectMenu = document.getElementById("select-menu")
    this.form = document.getElementById("poke-select-form")
    this.form.addEventListener("change", this.createPokemon)
  }

  createPokemon(e) {
    //is this in the right file?
    //need to make sure it:
    //creates pokemon if none exists
    //changes pokemon species if it does exist
    //deletes pokemon if set to blank(?) (might be bonus)
    console.log("Pokemon is being created!")
  }

  fetchAndLoadEntries() {
    this.adapter.getEntries()
    .then(entries => {
      entries.forEach(entry => this.entries.push(new Entry(entry)))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    // const selectMenu = document.getElementById("select-menu")
    //make a select form full of each Pokémon.
    for (let i = 0; i < 6; i++) {
      // let form = document.createElement("form")
      let select = document.createElement("select")
      select.setAttribute("id", `poke${i + 1}`)
      this.entries.forEach(entry => {
        select.options[select.options.length] = new Option(`${entry.id}. ${entry.name}`, `${entry.name}`, false, false)
      })
      // this.selectMenu.appendChild(form)
      this.form.appendChild(select)
    }
  }

}
