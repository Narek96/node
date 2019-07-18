class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(name, observer) {
    this.observers.push({ name, observer })
  }

  unsubscribe(name) {
    this.observers.forEach((el, index) => {
      if (el.name && el.name === name) {
        delete this.observers[index];
      }
    });
  }

  notifyAll(name, data) {
    this.observers.forEach(el => {
      if (el.name && el.name === name) {
        console.log(name, data)
      } else {
        // console.log(name, data)
      }
    });
  }
}

module.exports =  Observable;
