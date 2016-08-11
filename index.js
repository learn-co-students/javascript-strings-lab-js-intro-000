var greeting = "Hello, " + "everybody"+"!"

var specialGuest = "Neil deGrasse Tyson "

var greetSpecialGuest = "Hello, " + specialGuest + "!";

var topic = "space";

var conversation =`Let's talk about ${topic}.`
function say(greeting, name) {
  console.log(greeting, `, ${name}!`)
}
say("Hi","Willow")
say(greeting,specialGuest)
