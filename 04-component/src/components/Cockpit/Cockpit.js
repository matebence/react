import './Cockpit.css';
import Aux from '../../hoc/MyAux'

// Stateless Component
const cockpit = ( props ) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = "red";
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( "red" ); 
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( "bold" ); 
    }

    return (
      <Aux>
        <h1>{ props.appTitle }</h1>
        <p className={assignedClasses.join( ' ' )}>This is really working!</p>
        <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        <button onClick={props.login}>Login</button>
      </Aux>
    );
};

export default cockpit;