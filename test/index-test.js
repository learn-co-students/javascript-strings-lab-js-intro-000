/*global concatenatedString, describe, interpolatedString, it, myString */
var greeting = "Hello, everybody!";
var greet = "Hello,";
var specialGuest = "Neil deGrasse Tyson";
var Hello = " "
var greetSpecialGuest = greet + Hello + specialGuest + "!";
var topic = " space";

var conversation = `${"Let\'s talk about" + " "+ topic+"."}`

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
