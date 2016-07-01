//Boolean
let isDone:boolean = false;

//Number
let decimal:number = 6;
let hex:number = 0x00d;
let binary:number = 0b1010;
let octal:number = 0o744;

//String
let color:string = "blue";
let red:string = 'red';
let fullName:string = `Bob bington`;
let age:number = 37;
let sentence:string = `Hello, my name is ${ fullName }, and age ${ age }`
console.log(sentence);

//Array
let list:number[] = [1, 2, 3];


//Tuple
let x:[string,number];
x = ["hello", 10];

//Enum
enum Color{
    Red,
    Green,
    Blue
}
let c:Color = Color.Green;

//Any
let notSure:any = 4;
notSure = 'test';

//Void
function warnUser():void {
    alert("This is my warning messge");
}
warnUser();


// assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;