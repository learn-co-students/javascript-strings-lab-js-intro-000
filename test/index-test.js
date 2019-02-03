/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})
var greeting = 'Hello, everybody!'
it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})
var specialGuest = 'Neil deGrasse Tyson'
var greetSpecialGuest = 'Hello, ' + specialGuest  + '!'
it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
var topic = 'space'
var conversation = 'Let\'s talk about ' + topic + '.'
