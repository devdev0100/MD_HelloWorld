/*
Model code. Covered by tests.
 */

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHi = function() {
        return "My name is " + this.name + " and I am " + this.age + " years old";
    }

    this.celebrateBirthday = function() {
        this.age++;
    }
}

var person = new Person("Abe", 90);


/*
Presentation/View code. Isn't covered by tests.
 */

var updateHi = function() {
    document.getElementById('hiConsole').innerHTML = person.sayHi();
}

var celebrateBirthday = function() {
    person.celebrateBirthday();
}