var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var user = new Student("Black", "*", "Knight");
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
document.body.innerHTML = greeter(user);
//# sourceMappingURL=quickstart.js.map