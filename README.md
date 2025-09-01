# React
 A JavaScript library for buildung Unser interfaces. We can split every webpages into components like:
- Header
- Headline
- Sidebar
- Content

With this we will be also able to reusable pieces

A Basics exmaple

```html
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<div>
    <h1>Bence</h1>
</div>

<div id="p1"></div>
```

```css
.person {
    display: inline-block;
    margin: 10px;
    border: 1px solid;
    box-shadow: 0 2px 2px #ccc;
    width: 200px;
    padding: 20px;
}
```

```js
 function Person () {
    // JSX with Babel - its looks like HTML but its not
    return (
        <div>
            <h1>{props.bane}</h1>
        </div>
    );
 }

 // Adding to the DOM
 ReacDOM.render(<Person name="Ecneb" />, document.querySelector('#p1'))
```

Why React?
- UI State becomes difficult to handle with Vanilla JavaScript
- Focus on Business Logic, no on preventing your app from exploding
Huge ecosystem

React alternatives:
- Angular
- Vue

SPA? - Single Page application

Two kinds of:
- Single Page Application - Only one html page, content is rerendered on Client
- Multi Page Application - Multiple HTML pages, Content is rendered on Server

React tech stack:
- Optimize code
- Use next-gen JavaScript features
- Be More Productive
- Use Dependency Management Tool npm or yarn
- Use Bundler - Webpack
- Use Compiler for next gen js -> Babel
- Development Server

```sh
# Run terminal as admin
npm install -g create-react-app 
create-react-app my-first-react-app
npm start
```

`Functional Stateless, class Stateful <- This is a create pattern`

## High level overview of JavaScript

**Let and const**
```js
let name = 'Bence';
console.log(name);

// Nothing happens
name = 'Ecneb';       
console.log(name);

// ----------------------

const myName = 'Bence';
console.log(myName);

// Error
myName = 'Ecneb';       
console.log(myName);
```
**Arrow functions**
```js
function myFnc() {
    console.log('Its a normal function')
}

// No more issues with the 'this.' keyword
const fn = (name) => {
    console.log(name);
}
```

**Exports and imports**
```js
const person = {
    name: 'Max'
}

export default person;
export const baseData = 10;
export const clean = () => {
    console.log('clean');
}

import person from './person.js';
import {baseData} from './utility.js';
import {clean as cls} from './utility.js';
import * as bundled from './utility.js';
```

**Understanding classes**
```js
class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super();
        this.name = 'Bence';
    }

    printMyName() {
        console.log(this.myName);
    }
}

const letsTry = () => {
    let person = new Person();
    person.printName();
    person.printGender();
}
```

**Class properties and methods (skipping constructor)**
```js
class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    this.name = 'Bence';

    printMyName = () => {
        console.log(this.myName);
    }
}

const letsTry = () => {
    let person = new Person();
    person.printName();
    person.printGender();
}
```

**The spread and Rest operator**
```js
// Spread
const myArray = [1, 2, 3];
const newArray = [...myArray, 4, 5, 6]
const person = {
    name: 'Bence'
};

const newPerson = {
    ...person,
    age: 28
}
console.log(newPerson);

// Rest
const filter = (...args) => {
    return args.filter(el => el ===1);
}

console.log(filter(1, 2, 3));
```

**Destrocturing**
```js
// Easily extract array elements or object properties and storem in variables

const number = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num3);

{name} = {name: 'Bence', age: 30};
console.log(name);
```

**Reference and primitive types**
```js
const number = 1;
const num2 = number; // it copies the value

console.log(num2);

const person = {
    name: 'Bence'
};

const secondPerson = person;
person.name = 'Ecneb';
console.log(secondPerson) // output will be 'Ecneb'

// Using Copy logic with the spread operator
const secondPerson = {
    ...person
}
```

**Array functions**
```js
const numbers = [1, 2, 3];
const double NumbereArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);
```