const Observable = require('./models/Observable');

const observers = new Observable();

observers.subscribe("data", () => console.log("data"));
observers.subscribe("closed", () => console.log("closed"));

// observers.unsubscribe("data");

observers.notifyAll("closed", {a:0});
observers.notifyAll("data", {a:1});
