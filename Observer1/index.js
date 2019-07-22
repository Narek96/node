const Observable = require('./models/Observable');

const observers = new Observable();

observers.subscribe("data", data => data);
observers.subscribe("closed", data => data);

observers.unsubscribe("data");


observers.notifyAll("closed", {a:0});
observers.notifyAll("closed", {a:0});
observers.notifyAll("data", {a:1});
observers.notifyAll("data", {a:1});

