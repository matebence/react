import React, { Component } from 'react';
import Person from './Person/Person';

// Statefull component
class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] inside constructor');
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount');
    this.lastPersonRef.current.test();
  }



  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log('[Persons.js] inside componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] inside shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState);
    console.log(this.props.persons);
    return nextProps.persons !== this.props.persons; // is update required?
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Persons.js] inside componentWillUpdate');
    console.log(nextProps);
    console.log(nextState);
  }

  componentDidUpdate() {
    console.log('[Persons.js] inside componentDidUpdate');
  }

  render () {
      console.log('[Persons.js] inside render');
      return this.props.persons.map( ( person, index ) => {
        return <Person
          click={() => this.props.clicked( index )}
          name={person.name}
          age={person.age}
          forwardedRef={(this.lastPersonRef)}
          key={person.id}
          changed={( event ) => this.props.changed( event, person.id )} />
      });
  }
}

export default Persons;