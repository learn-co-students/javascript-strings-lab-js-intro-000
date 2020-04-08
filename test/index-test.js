/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  //var specialGuest = 'Neil deGrasse Tyson';
  expect(greetSpecialGuest).toEqual(`${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
