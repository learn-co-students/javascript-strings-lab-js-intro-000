/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest) + ("Hello" +  greetSpecialGuest)
})

it('interpolates a string in `conversation`', function() {
  expect(Lets talk about + "topic")
})
