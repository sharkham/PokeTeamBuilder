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
    const select1 = document.createElement("select")
    // this.entries.forEach(entry => {
    //   document.createElement("option").attributes

    // })
    selectMenu.appendChild(form1)
    form1.appendChild(select1)
  }
}
