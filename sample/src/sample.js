
/* jshint -W033: false */
/* jshint -W098: false */
/* global console: true */

// fat array functions
// (shorter syntax and intuitive "this" semantic)

var f1 = (x, y) => { return x * y }
var f2 = (x, y) => x * y
var f3 = () => { return this }

// classes
// (shorter syntax and more intuitive OO)

class Foo {}
class Bar extends Foo {
    constructor (foo) { super(); this.foo = foo }
    method1 () { return this }
    method2 () { return this }
}

//  destructuring assignment
//  (reduced helper variables)

function now () { return [ 2, 6, 2013, 8, 0 ]; }
var [ month, day, year ] = now()
var [ ,, year ] = now()

function today () { return { d: 6, m: 2, y: 2013 }; }
var { m: month, y: year } = today()

var books = [
    { title: "Foo", author: "Mr. Foo" },
    { title: "Bar", author: "Mr. Bar" }
]
books.forEach(({ title: t, author: a }) => {
    console.log(t, a)
})
for (var { title: t, author: a } of books) {
    console.log(t, a)
}

// for-of construct

for (let x of [ 1, 2, 3, 4 ]) {
    console.log(x)
}

// rest parameter and spread operator

var store = {}
store.add = function(category, ...items) {
    if (!store[category])
        store[category] = []
    items.forEach((item) => {
        store[category].push(item)
    })
}
var items = [ "a", "b", "c" ]
store.add("dairy", ...items)

// object literal property value shorthand

function makecreature (name, power) {
    return { type: "Monster", name: name, power: power }
}
function makecreature (name, power) {
    // return { type: "Monster", name, power }
}

// default values

function makecreature (name, power) {
    if (typeof name  === "undefined") name = "foo"
    if (typeof power === "undefined") power = 42
    // return { type: "Monster", name, power }
}
function makecreature (name = "foo", power = 42) {
    // return { type: "Monster", name, power }
}

// block binding
function f (data) {
    let j = data.length
    console.log(j, " items")
    for (let i = 0; i < j; i++) {
        let j = data[i] * data[i]
        console.log(j)
    }
}

// generators
var f7 = function *() {
    var stopNow
    for (var i = 0; i < 10; i++) {
        stopNow = yield i
        if (stopNow === true)
            break;
    }
}
console.log(f7.next().value)     // 0
console.log(f7.next().value)     // 1
console.log(f7.next(true).value) // 2

