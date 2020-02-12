// let memoizedEntries = ""
class EntriesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/entries'
  }

  getEntries() {
    return fetch(this.baseUrl).then(res => {
      // memoizedEntries = res.json()
      return res.json()
    })
  }
}

