class Entries {
  constructor(){
    this.entries = []
    this.adapter = new EntriesAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadEntries()
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
    const selectMenu = document.getElementById("select-menu")
    //make a select form full of each Pokémon.
    for (let i = 0; i < 6; i++) {
      let form = document.createElement("form")
      form.setAttribute("id", `poke${i + 1}`)
      let select = document.createElement("select")
      this.entries.forEach(entry => {
        select.options[select.options.length] = new Option(`${entry.name}`, `${entry.name}`, false, false)
      })
      selectMenu.appendChild(form)
      form.appendChild(select)
    }
  }

}
