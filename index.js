const Observers = require('./models/Observers');
const Observer = require('./models/Observer');

const observers = new Observers();

const observer1 = new Observer('First Observer');
const observer2 = new Observer('Second Observer');
const observer3 = new Observer('Third Observer');

observers.subscribe(observer1);
observers.subscribe(observer2);
observers.subscribe(observer3);

// observers.unsubscribe(observer1);
// observers.unsubscribe(observer2);

observers.notifyAll();
