/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})
it('defines `greet`', function() {
  expect(greet).toEqual("Hello")
})
it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
