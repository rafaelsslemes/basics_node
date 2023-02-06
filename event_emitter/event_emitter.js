const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', ()=>{
    console.log('event start called');
});

console.log('After');
eventEmitter.emit('start');
console.log('Before');