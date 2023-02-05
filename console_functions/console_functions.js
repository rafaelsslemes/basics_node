const a = 10;
const text = 'middle text';
const b = 20;

// interpolated values, log accept several args
console.log(a, text, b);

// interpolated values in one param, crasis syntax
console.log(`${a} ${text} ${b}`);

// Interpoled values by %s
console.log('Format Strings %s', a)

// Log with counter (repeated syntax)
console.count(`${a}, ${text}, ${b}`);
console.count(`${a}, ${text}, ${b}`);
console.count(`${a}, ${text}, ${b}`);

// restart count on new syntax
console.count(a);

// Continues counting
console.count(`${a}, ${text}, ${b}`);

// Clear console after 5 secs
setTimeout(()=>{
    console.clear();
}, 5000)
