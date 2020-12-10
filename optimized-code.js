// inline caching 
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`
}

const userData = {
  firstName: 'Joe',
  lastName: 'Junior'
}

// If a function is called multiple times - javascript begins to inline cache
findUser(userData)

// hidden classes - javascript complier uses to show (in this example) this object has the same hidden class (properties)
// write code that is predictable for machines and people 
function Animal(x, y) {
  this.x = x
  this.y = y
}

// instantiate your object properties in the same order - adding things in different order would slow things down
const obj1 = new Animal(1, 2)
const obj2 = new Animal(3, 4)

// don't introduce things in a different order (this will confuse the compiler and de-optimize code)
obj1.a = 30
obj1.b = 100
obj2.b = 30
obj2.a = 100

// better to write like this 
obj1.a = 30
obj1.b = 100
obj2.a = 30
obj2.b = 100