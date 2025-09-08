import React, { Component } from 'react';
import './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App'

// Stefull Component
class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor');
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount');
        // It can be used only in statefull components
        // this.inputElement.current.focus(); 
    }

    test() {
       this.inputElement.current.focus(); 
    }

    render() {
        console.log('[Person.js] inside render');
        return (
            <span>
                <AuthContext.Consumer>
                    {auth => auth ? <p>Authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input ref={this.inputElement} type="text" onChange={this.props.changed} value={this.props.name} />
            </span>
        )
    }
}



// Setting the type of variables
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, "Person");