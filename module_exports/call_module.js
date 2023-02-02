const my_module = require('./reusable_functions');  // Always use relative path
const imported_sum = my_module.sum;

imported_sum(10, 20);
imported_sum(30, 40);