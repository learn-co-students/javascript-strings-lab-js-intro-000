/*global concatenatedString, describe, interpolatedString, it, myString */
var assert = require("assert");
it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  assert.equal(conversation,`Let's talk about ${topic}.`)
})
