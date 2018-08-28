// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
  return newDrivers
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  return drivers
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