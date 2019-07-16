class Observer {
  constructor(name) {
    this.name = name
  }

  notify() {
    console.log(`${this.name}`)
  }
}

module.exports = Observer
