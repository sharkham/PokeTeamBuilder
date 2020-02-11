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
    this.form.addEventListener("change", this.createPokemon.bind(this))
    //binding this here makes "this" the entries class so it can be used in createPokemon function
  }

  createPokemon(e) {
    //is this in the right file?
    //need to make sure it:
    //creates pokemon if none exists
    //changes pokemon species if it does exist
    //deletes pokemon if set to blank(?) (might be bonus)
    console.log(e.target.value)
    //somehow, get request to api/v1/entries based on value(id), and then use that info to make Pokémon
    console.log(this)
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
        select.options[select.options.length] = new Option(`${entry.name}`, `${entry.id}`, false, false)
      })
      // this.selectMenu.appendChild(form)
      this.form.appendChild(select)
    }
  }

}
