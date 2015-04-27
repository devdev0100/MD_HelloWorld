describe("Checks the Person object", function(){
    var person;

    beforeEach(function(){
        person = new Person('Bob', 20);
    });

    it('Should return the correct name and age', function(){
        expect(person.name).toEqual('Bob');
        expect(person.age).toEqual(20);
    });

    it('Should be older after a birthday', function(){
        person.celebrateBirthday();
        expect(person.age).toEqual(21);
    });

    it('Should say the name and age', function(){
        expect(person.sayHi()).toEqual('My name is Bob and I am 20 years old');
    });

});