import React, { Component, PureComponent } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Klass from '../hoc/Klass';

export const AuthContext = React.createContext(false);

// Statefull Component
class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor');
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }

// Component update happens from top to bottom - so placing the condition is very important

// PureComponent - it does this check for our state
//  shouldComponentUpdate(nextProps, nextState) {
//     console.log('[App.js] inside shouldComponentUpdate');
//     console.log(nextProps);
//     console.log(nextState);
//     console.log(this.props.persons);

//     // if we return here the wron boolean, then react will always try to update
//     return nextProps.persons !== this.props.persons; // is update required?
//   }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] inside componentWillUpdate');
    console.log(nextProps);
    console.log(nextState);
  }

  componentDidUpdate() {
    console.log('[App.js] inside componentDidUpdate');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1      // editing old state
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});;
  }

  render () {
    console.log('[App.js] inside render');
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.loginHandler} />;
    }

    return (
      <Klass classes="App">
        {/* <ErrorBoundary><YourAnyComponent>Will be this displayed? {executeNonExistingMethod()} </YourAnyComponent></ErrorBoundary> */}
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Klass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
