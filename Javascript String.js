// in our browser's console and be done with it. Give it a try. (If you're on a Mac, that would be Command + Option + J together.)
// In order to greet our guests, we need to tell JavaScript that we're using a string. A string is a collection of characters (letters, numbers, and symbols) wrapped in single or double quotes (or, as we'll see, in back ticks). So to greet everyone, we can write,
"Hello everybody"
// What if we want to say hi to a special guest, like Neil deGrasse Tyson? When we wrap strings in single or double quotes, we can join them together using the + operator:
var specialguest = "Anthony CHristie"
"Hello," + specialguest + "!" // "Hello, Anthony Christie!"
// This is called concatenation. Notice that the value of the specialGuest variable is also a string!
/* When we wrap strings in back ticks, we can use placeholders (${}) and insert variables or evaluated JavaScript directly:*/
var specialguest = "Anthony Christie";
`Hello, ${specialguest}! High ${3 + 2}!`
// "Hello, Anthony Christie! High 5!"
// This is called INTERPOLATION.
