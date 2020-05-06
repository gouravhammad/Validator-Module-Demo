const validator = require('validator')

// Check whether given email is valid or not
var email = 'test@gmail.com'
console.log(validator.isEmail(email))  // true
email = 'test@'
console.log(validator.isEmail(email))  // false

// Check whether string is in lowercase or not
var name = 'geeksforgeeks'
console.log(validator.isLowercase(name))  // true
name='GEEKSFORGEEKS'
console.log(validator.isLowercase(name))  // false

// Check whether string is empty or not
var name = ''
console.log(validator.isEmpty(name))  // true
name='geeksforgeeks'
console.log(validator.isEmpty(name))  // false


