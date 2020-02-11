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
    const form1 = document.createElement("form")
    for (let i = 0; i < 6; i++) {
      let select = document.createElement("select")
      select.setAttribute("id", `select${i + 1}`)
      this.entries.forEach(entry => {
        select.options[select.options.length] = new Option(`${entry.name}`, `${entry.name}`, false, false)
      })
      form1.appendChild(select)
    }
    selectMenu.appendChild(form1)
  }

}
