/*global concatenatedString, describe, interpolatedString, it, myString */
var greeting = "Hello, everybody!";
var specialGuest = "Neil deGrasse Tyson";
var topic = "space";

var greetSpecialGuest = `Hello, ${specialGuest}!`;
var conversation = `Let's talk about ${topic}.`;

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
