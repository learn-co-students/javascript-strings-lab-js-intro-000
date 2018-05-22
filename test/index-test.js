/*global concatenatedString, describe, interpolatedString, it, myString */
var greeting = "Hello, everybody!"
var greetings = "Hello,"
var specialGuest = " Neil deGrasse Tyson! !"
var greetSpecialGuest = greetings + specialGuest + "!";
var topic = "space";
var conversation = `${topic}`;

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let\'s talk about ${topic}.`)
})
var specialGuest = "Neil deGrasse Tyson"; {
`Hello,
${specialGuest}! High
${3 + 2}!` // "Hello Neil deGrasse Tyson! High 5!";
}