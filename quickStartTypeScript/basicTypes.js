//Boolean
var isDone = false;
//Number
var decimal = 6;
var hex = 0x00d;
var binary = 10;
var octal = 484;
//String
var color = "blue";
var red = 'red';
var fullName = "Bob bington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ", and age " + age;
console.log(sentence);
//Array
var list = [1, 2, 3];
//Tuple
var x;
x = ["hello", 10];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//Any
var notSure = 4;
notSure = 'test';
//Void
function warnUser() {
    alert("This is my warning messge");
}
warnUser();
// assertions
var someValue = "this is a string";
var strLength = someValue.length;
//# sourceMappingURL=basicTypes.js.map