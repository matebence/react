import './App.css';
import { Component } from 'react';
import Person from './Person/Person';
import styled from 'styled-components';

class App extends Component {

  state = {
    showPerson: true,
    persons: [
      {id: 1, name: 'Bence', age: 30},
      {id: 2, name: 'David', age: 31},
      {id: 3, name: 'Peter', age: 32},
    ]
  }

  changeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  tooglePersonComponent = () => {
    this.setState({showPerson: !this.state.showPerson});
  }

  deletePerson = (personIndex) => {
    const persons = [... this.state.persons]; 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const Button = styled.button`
      background: ${props => props.primary ? '#007bff' : '#6c757d'};
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;

      &:hover {
        background: ${props => props.primary ? '#0056b3' : '#5a6268'};
      }
   
      @media (min-width: 768px) {
        background: orange;
      }
    `;

    let classes = [];
    
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
          <Button primary onClick={this.tooglePersonComponent}>Toogle</Button>
          <p className={classes.join(' ')}>This is a class test</p>
          {
            this.state.showPerson ? 
            <div>
              {
                this.state.persons.map((e, index) => {
                    return <Person 
                      key={e.id}
                      name={e.name}
                      age={e.age} 
                      click={() => this.deletePerson(index)}
                      change={(event) => this.changeHandler(event, e.id)}>And the Hobbies are: Cars</Person>
                })
              }
            </div>
            :
            // Render nothing
            null 
          }
      </div>
    );
  }
}

export default App;