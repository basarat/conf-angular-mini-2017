function Person(age) {
    this.age = age
    const self = this;
    this.growOld = function() {
        self.age++;
    }
}
const person = new Person(1);
const growOld = person.growOld;

console.log(person.age);
growOld();
console.log(person.age);