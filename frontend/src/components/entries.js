class Entries {
  constructor(){
    this.entries = []
    // this.selectFields = []
    this.adapter = new EntriesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadEntries()
  }

  initBindingsAndEventListeners() {
    this.form = document.getElementById("poke-select-form")
    this.selectFields = Array.from(document.querySelectorAll("select.pokeselect"))
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
    //make a select form full of each Pokémon.
    // let selects = document.querySelectorAll("select.pokeselect")
    for (let i = 0; i < this.selectFields.length; i++) {
      let select = this.selectFields[i]
      select.setAttribute("id", `poke${i + 1}`)
      // select.options = new Option(" ", " ", false, false)
      this.entries.forEach(entry => {
        select.options[select.options.length] = new Option(`${entry.name}`, `${entry.id}`, false, false)
      })
    }
    // old way of doing it:
    // for (let i = 0; i < 6; i++) {
    //   // let form = document.createElement("form")
    //   let select = document.createElement("select")
    //   select.setAttribute("id", `poke${i + 1}`)
    //   select.setAttribute("disabled", "true")
    //   this.selectFields.push(select)
    //   this.entries.forEach(entry => {
    //     select.options[select.options.length] = new Option(`${entry.name}`, `${entry.id}`, false, false)
    //   })
    //   // this.selectMenu.appendChild(form)
    //   this.form.appendChild(select)
    // }
  }

  enableFields() {
    this.selectFields.map((select) => {
      select.removeAttribute("disabled")
    })
  }

}
