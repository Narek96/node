class Observable {
  constructor() {
    this.observers = {};
  }

  subscribe(name, observer) {
    this.observers[name] = observer
  }

  unsubscribe(name) {
    delete this.observers[name]
  }

  notifyAll(name, data) {
    if (this.observers[name]) {
      console.log(name,this.observers[name](data))
    } else {
      console.log(name, this.observers)
    }
  }
}


module.exports =  Observable;
