interface Person {
    firstName:string;
    lastName:string;
}

class Student {
    fullName:string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

var user = new Student("Black", "*", "Knight");

function greeter(person:Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

document.body.innerHTML = greeter(user);