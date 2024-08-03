
const readline = require('readline');
let pattern = /^[^\s@]+@[^\s@]+.[^\d\s@]$/g
let rl= readline.createInterface(process.stdin,process.stdout)

rl.question('Enter email:  ',(email) => {
  validateEmail(email)
})

const validateEmail = (email) => {
  if(pattern.test(email)){
    console.log('congrats: Email entered is valid')
  }
  else{
    console.log('Error: The email entered is invalid')
  }
}
