const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init Object
const myemitter = new MyEmitter();

// Event Listener
myemitter.on('event', () => console.log('Event fired'));

// Init event
myemitter.emit('event');