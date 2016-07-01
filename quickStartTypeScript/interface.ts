function printLable(lableObj:{lable:string}) {
    console.log(lableObj.lable);
}

let myObj = {size: 10, lable: 'size 10 obj'};

interface LabelledValue {
    lable:string;
}

function printLablledValue(labllledObj:LabelledValue) {
    console.log(labllledObj.lable);
}

let myObjectVal = {size: 10, lable: 'size 10 obj'};
printLablledValue(myObjectVal);


interface SquareConfig {
    color?:string;
    width?:number;
}

function createSquare(config:SquareConfig):{color:string; are:number} {
    let newSquare = {color: "White", are: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.are = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

interface SearchFunc {
    (source:string, subString:string):boolean;
}

let mySearch:SearchFunc;
mySearch = function (source:string, subString:string) {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
};

interface StringArray {
    [index:number]:string;
}

let myArray:StringArray;
myArray = ['Bob', "Fred"];

let myStr:string = myArray[0];


interface ClockInterface {
    currentTime:Date;
    setTime(d:Date);
}

class Clock implements ClockInterface {
    setTime(d:Date) {
        this.currentTime = d;
    }
    currentTime:Date;
}


interface Shape {
    color:string
}

interface Square extends Shape {
    sideLength:number;
}

let square = <Square>{};
square.color = 'blue';
square.sideLength = 10;
