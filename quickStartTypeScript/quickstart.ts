interface Person{
    firstName: string;
    lastName: string;
}

var user = {firstName: "Black", lastName:"Knight"};

function greeter(person: Person) {
    return "Hello, " + person.firstName+ " "+ person.lastName;
}

document.body.innerHTML = greeter(user);