// alert("hello123");
// console.log('Hello');
// https://developer.mozilla.org/en-US/docs/Web/API/console
// console.error("this is an error");
// console.warn("this is warning");
// let n = "archana";
// n = "sachin";
// console.log(n);

// const score = 1;
// console.log(score);

// String, Numbers, Boolean, null, undefined
//const name = "John";
//const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof z);

//concatenate
// console.log('My name is ' + name + ' and i am ' + age);
// console.log(`My name is ${name} and I am ${age}`);

// const s = "Hello world";
// console.log(s.substring(0,7).toUpperCase());
// console.log(s.split(''));

// const t = 'technology, computer, it, code';
// console.log(t.split(', '));

//Arrays

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples','oranges', 10]
// fruits[3]='pears';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(fruits);
// console.log(fruits.includes('mangos'));
// console.log(fruits.indexOf('oranges'));

//Object literals
// const person = {
//     firstName: 'Archana',
//     lastName: 'Sachin',
//     age: 26,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '25 Selby Street',
//         city: 'Toronto',
//         state: 'ON'
//     }
// }
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.street);

// const {firstName, lastName, address: { city }} = person;
// console.log(firstName);
// console.log(city);

// person.email = 'archana@gmail.com'
// console.log(person.email);

// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Meeting",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Dentist Appt",
//     isCompleted: false,
//   },
// ];
// console.log(todos[1].text);

// console.log(JSON.stringify(todos));

// //For
// for (let i = 0; i <= 10; i++) {
//   console.log(`For Loop Numbers: ${i}`);
// }

// //While
// let a = 0;
// while (a <= 10) {
//   console.log(`While Loop Numbers:${a}`);
//   a++;
// }

// for (todo of todos) {
//   console.log(todo.id);
// }

// //forEach, map, filter
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// //Using Arrow Functions
// todos.forEach((todo) => {
//   console.log(todo.text);
// });

// const todoText = todos.map(function (todo) {
//     return todo.text;
//   });
//   console.log(todoText);

//   const todoCompletedIds = todos.filter(function (todo) {
//     return todo.isCompleted === true; //== is datatype insensitive
//   }).map(function(todo){
//       return todo.id;
//   });
//   console.log(todoCompletedIds);

// const x = "10";
// if( x === 10){
//     console.log("x is 10");
// }
// else{
//     console.log("x is NOT 10");
// }

// const x = 11;

// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default :
//         console.log('colors is not red or blue');
//         break;

// }

// function add(num1, num2){
//     return (num1 + num2);
// }
// console.log(add(1,1));


// const addNums = (num1 = 3, num2 = 3) => num1 + num2;
// const addNums2 = (num1 = 3, num2 = 4) => {
//     return  num1 + num2;
// };

// console.log(addNums());

// const addNums3 = num1 => num1 + 5;
// console.log(addNums3(5));

//constructor function 
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`;
    
//     }
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// //class
// class Persons{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //Instantiate Object
// const person1 = new Person('Archana', 'Sachin', '5-17-1995');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person1);

//single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// //Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// console.log(items);
// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Archana";
ul.lastElementChild.innerHTML = '<h1>Sachin</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';