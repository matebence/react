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

## Http Requests in React

Dummy API, for testing
https://jsonplaceholder.typicode.com/

https://github.com/axios/axios

When to Use Each Approach?

- useEffect: For simple cases where the component needs data when it mounts or when dependencies change.
- Redux/Thunks: When managing global state across the app or handling complex state changes with multiple components.
- Custom Hooks: When you want to reuse HTTP request logic across different components.
- React Query/SWR: For advanced scenarios with caching, background fetching, and automatic retries.
- Class Components: Mostly legacy. Use hooks where possible in modern React development.

```sh
 npm install --save axios
```

- `componentDidMount` ist the best place the send data - its a side effect

```js
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
            });
        
    }
```

Interceptor for request (Axios)
```js
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
```

Interceptor for response (Axios)
```js
axios.interceptors.request.use(request => {
  console.log(request);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error)
});
```

Setting default
```js
axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error)
});
```

Using instances for one set of request and for another ones
```js
import axios from 'axios'

const instace = axios.create({
    baseUrl: 'https://jsonplaceholder.typicode.com'
});

instace.defaults.headers.common['Authorization'] = 'TEST';
instace.defaults.headers.post['Content-Type'] = 'application/xml';

export default instace;
```

```js
import  ../../axiosInstance;

myCustomFunction = () => {
    axiosInstance.get('/test')
        .then(response => {
            console.log(response);
        )
        .catch(error => {
            console.log(error);
        });
}
```

## Routing in React

- Loading different types of component for specific routes (JS is doing the rerendering)

```sh
npm install --save react-router-dom
```

Defining the entry point via BrowserRouter (use App.js or index.js)

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Hooking up the href's with Link

```js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/:id">Home</Link></li>
      </ul>
    </nav>
  );
}
```
We use nav link if we want to stale .active class

```js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
      </ul>
    </nav>
  );
}
```

```js
componentDidMount() {
    console.log(this.props); // here we can see our nav options from reac-router
}
```

Retrieving params in a Class Base Component
```js
export function withRouter(Component) {
  return function WrappedComponent(props) {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
}
```

```js
export default withRouter(Home);
```

Retrieving params in a Functional Component
```js
import React from 'react';
import { useParams } from 'react-router-dom';

function Home() {
  const { id } = useParams(); 

  return (
    <div>
      <p>User ID: {id}</p>
    </div>
  );
}

export default Home;
```

Working with Nested Routes

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parent route */}
        <Route path="dashboard" element={<Dashboard />}>
          {/* Nested child routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

```js
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>

      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
```

Redirecting - it can be used in condition like any other component

```js
<Navigate from="/" to="/new-post" />
```

Loading Lazily

```js
import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
```

```js
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Suspense>
  );
}

export default App;
```

Deployment on server

- We have to make sure that the index.html is always returned also for unknown urls
- If tis served from a base directory
  - <BrowserRouter basename="my-app">


## React Forms

```js
import styles from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [styles.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(styles.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}></input>;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}></textarea>
            break;
        case ('select'):
            inputElement = (
                <select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>{option.displayValue}</option>
                        )
                    })}
                </select>
            )
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}></input>
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;
```

## React Redux

Redux is all about state. In our example that can be list of ingredients, authentication, navigation, is modal open etc ... Using setState 
in smaller apps its fine but in bigger application we need Redux. To be able to manage complex state. 

Redux:
- central store -> stories entiry application state (a giant object)
- component -> wan to manipulate app state
  - Dispatches Action -> Pre defined Information package (possibly with payload)
  - Reaches Reducers -> Receive action and update State (pure, sync functions, no side effect)
  - The reducder at the end updates the Central store
  - Triggers Subscription -> we can listen to Central store changes

In a React app, a side effect refers to any operation that interacts with the outside world or has an effect outside of the component’s scope. These operations might include things like:
- Fetching data from an API
- Modifying the DOM (outside of the React rendering flow)
- Setting up event listeners
- Interacting with local storage or session storage
- Timers (like setTimeout or setInterval)
- Subscriptions to external data streams

**Setting up Redux**


Plugin for our browser to able to work with Redux
https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
https://github.com/reduxjs/redux-devtools?tab=readme-ov-file


```sh
npm install @reduxjs/toolkit react-redux
```

```js
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({type: 'ADD_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
// store.dispatch({type: 'ADD_COUNTER', payload: {}});

//Subscription - something changed, so we can listen to it
store.subscribe(() => {
  console.log(store.getState());
});
```

When to use use Redux?
Local UI State => No we should use Redux
Persistent State => Yes we should stored in redux
Client State like Auth => Yes we should stored in redux

## Creation of middleware 

```js
const logger = store => {
  return next => {
    return action => {
      console.log("Middleware", action);
      const result = next(action)
      console.log("next state", result);
      return result;
    }
  }
}


const store = configureStore({
  reducer: {
    ctr: counterReducer,
    res: resultReducer
  },
```

Where to put logic? (Reducer or Action creators?)
Action creators
- can run async code
- should prepare the state update to much
Reducer
- Pure, sync code only
- Core redux concept: Reducers update the state
 
## Redux async

```sh
npm install --save redux-thunk
```

```js
export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}
export const storeResult = (res) => {
    return (dispatch) => {
        setTimeout(() =>{
            dispatch(saveResult(res));
        }, 8000)
    }
}
```