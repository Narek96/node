class Observers {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((subscriber) => subscriber !== observer);
  }

  notifyAll() {
    this.observers.map(observer => observer.notify())
  }
}

module.exports = Observers
