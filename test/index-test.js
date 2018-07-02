/*global concatenatedString, describe, interpolatedString, it, myString */
var greeting = "Hello, everybody!"
var greetings = "Hello,"
var specialGuest = " Neil deGrasse Tyson! !"
var greetSpecialGuest = "specialGuest"  + "greetings";
var topic = "space";
var conversation = `${topic}`;

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!");
});

it(greetsSpecialGuesreetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual"('Hello, ${specialGuest}!`);

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`${topic}`);
});  

