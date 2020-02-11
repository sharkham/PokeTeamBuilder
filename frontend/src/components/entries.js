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
      return console.log(entries)
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    console.log("rendering...")
    const selectMenu = document.getElementById("select-menu")
    selectMenu.innerHTML = "my pokemon menu here"
    console.log(this.entries)
  }
}
