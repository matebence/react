import './App.css';

// We need to import it
import Person from './Person/Person';
import Human from './Human/Human';
import { Component } from 'react';

// If this is only a function then state cannot be defined here, so we have to extended Component and set a render method
class App extends Component {

  // These are no real htlm tags and attributes, thats because we have className
  // We put everything in one root element 

  state = {
    persons: [
      {name: 'Bence', age: 30},
      {name: 'David', age: 31},
      {name: 'Peter', age: 32},
    ]
  }

  changeHandler = (event) => {
    // This is wrong we shoud use setState instead this.state.persons[0].name='New';
    // It merges the state
    this.setState({persons: [{name: event.target.value, age: 99}]});
    console.log(this.state);
  }


  clickHandler = () => {
    // It merges the state
    this.setState({persons: [{name: 'Test', age: 99}]});
    console.log(this.state);
  }


  switchNameHandler = (value) => {
    this.setState({persons: [{name: value, age: 99}]});
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React App</h1>
        <Person/>
        <br/>
        <Person/>

        <br/>
        <br/>

        {/* This can be also a style js object as a variable style={myStyleVariable} */}
        <button onClick={this.clickHandler} style={{
          'backgroundColor': 'red'
        }}>Switch Name</button>

        <br/>
        <br/>

        <Human 
          name="Bence"
          age="30"
          click={this.clickHandler}>My Hobbies are: Cars</Human>
        
        <br/>
        <br/>

        <p>Input can be changed here</p>
        <Human 
         name={this.state.persons[0].name}
         age={this.state.persons[0].age} 
         click={() => this.switchNameHandler('Max')}
         change={this.changeHandler}/>
      </div>
    );
  }

  // This is was JSX ist doing behind the scenes
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is just a test'));
} 

export default App;