function printLable(lableObj) {
    console.log(lableObj.lable);
}
var myObj = { size: 10, lable: 'size 10 obj' };
function printLablledValue(labllledObj) {
    console.log(labllledObj.lable);
}
var myObjectVal = { size: 10, lable: 'size 10 obj' };
printLablledValue(myObjectVal);
function createSquare(config) {
    var newSquare = { color: "White", are: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.are = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myArray;
myArray = ['Bob', "Fred"];
var myStr = myArray[0];
var Clock = (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {};
square.color = 'blue';
square.sideLength = 10;
//# sourceMappingURL=interface.js.map