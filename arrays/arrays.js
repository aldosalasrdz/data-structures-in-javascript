import chalk from 'chalk'

const boldLog = (msg) => console.log(chalk.blue.bold(msg))

// shift() function
boldLog('\nshift() function')
var arrayShift = [1, 3, 5, 'seven']
console.log(`Before shift(): ${arrayShift}`)
arrayShift.shift()
console.log(`After shift(): ${arrayShift}`)

// unshift() function
boldLog('\nunshift() function')
var arrayShift = [1, 3, 5, 'seven']
console.log(`Before shift(): ${arrayShift}`)
arrayShift.shift()
console.log(`After shift(): ${arrayShift}`)

boldLog('Hello world')

if (true) {
  if (true) {
    if (true) {
      console.log('Hello')
    }
  }
} else {
  console.log('Else')
}
