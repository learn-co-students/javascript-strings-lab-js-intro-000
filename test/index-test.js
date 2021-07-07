/*global concatenatedString, describe, interpolatedString, it, myString */

var greeting = "Hello, everybody!";
it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

var specialGuest = 'test';
var greetSpecialGuest = `Hello, ${specialGuest}!`;

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})
var topic = 'test';
var conversation = `Let's talk about ${topic}.`
it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
