// In Node.js, files === modules 
// See: https://medium.com/@lazlojuly/are-node-js-modules-singletons-764ae97519af
// Counter.js = Counter module 

let value = 0

module.exports = {
  increment: () => value++,
  get: () => value,
}