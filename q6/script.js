function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person1 = { name: 'Alice' };

greet.apply(person1, ['Hello', '!']);
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person2 = { name: 'Alice' };

greet.call(person2, 'Hello', '!');
