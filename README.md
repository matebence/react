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

**Inline styles with pseudo characters**
```sh
npm install --save styled-components
```

**Using CSS modules**
```sh
npm run eject
```

Search for the section that looks like this: config/webpack.config.js
```js
{
  test: /\.css$/,
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: isEnvProduction && shouldUseSourceMap,
  }),
  // ... other options
}
```
Just above or below that rule, add a new rule specifically for .module.css files.
```js
{
  test: /\.module\.css$/,
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: isEnvProduction && shouldUseSourceMap,
    modules: {
      localIdentName: isEnvProduction
        ? '[hash:base64]'
        : '[path][name]__[local]',
    },
  }),
},
```
Use CSS Modules in Components, MyComponent.module.css
```css
.container {
  color: red;
}
```

```jsx
import styles from './MyComponent.module.css';

function MyComponent() {
  return <div className={styles.container}>Hello, CSS Modules!</div>;
}
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

## Debugging

Way of working:
- we have always the dev consoled open (Browser/Create-react-app)
- Browser Developer tools > Sources > src > App.js
- Chrome extension 'react developer tools'

## Creation of Components

**Statefull (Containers)**
- class XY extends Components
- Access to State
- Lifecycle Hooks
- Access State and Props via this
- this.state.XY & this.props.XY
- Use only if  you need to manage state or acess Lifecycle Hooks

**Stateless**
- const XY = (props) => {...}
- Access to State
- Lifecycle Hooks
- Acess Props via 'props'
- props.xy
- Use in all other cases

## Lifecycle methods (in statefull components)

**All lifecycle methods**
- constructor()
- componentWillMount() - **deprecated**
- componentWillReceiveProps() - **deprecated**
- shouldComponentUpdate()
- componentWillUpdate() - **deprecated**
- componentDidUpdate()
- componentDidCatch()
- componentDidMount()
- componentWillUnMount()
- render()

**New lifecycle methods**
- static getDerivedStateFromProps(nextProps, prevState) - executed when ever the props changes
- getSnapshotBeforeUpdate() - good for example to save the user scrolling position, because this is the point before the DOM changes
 
**Creation**
- constructor()
- componentWillMount()
- render()
- `render child components`
- componentDidMount()

**Update (triggered by Parent)**
- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- `update child components`
- componentDidUpdate()

**Update (triggered by internal change)**
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- `update child components`
- componentDidUpdate()

## How React update the DOM?

    PureComponent - it implements the shouldComponentUpdate check. The update of components is happening from top to bottom

Old virtual DOM and rerendered virtual DOM comparison. (Because of this is important the key when we use a for loop)

## Checking for variable types

```sh
npm install --save prop-types
```

```js
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
```