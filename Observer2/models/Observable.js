class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(name, observer) {
    this.observers.push({ name, observer })
  }

  unsubscribe(name) {
    this.observers = this.observers.filter(el => el.name !== name);
  }

  notifyAll(name, data) {
    this.observers.forEach(el => {
      if (el.name && el.name === name && typeof el.observer === 'function') {
        console.log(name, el.observer(data))
      } else {
        console.log(name, el.name)
      }
    });
  }
}

module.exports =  Observable;
