// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  newDrivers = drivers.push(name)
  return newDrivers
}

function destructivelyPrependDriver(name) {
  newDrivers = drivers.unshift(name)
  return newDrivers
}

function destructivelyRemoveLastDriver() {
  newDrivers = drivers.pop()
  return newDrivers
}

function destructivelyRemoveFirstDriver() {
  newDrivers = drivers.shift()
  return newDrivers
}

// function appendDriver(name) {
//   driver
// }