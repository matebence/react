import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React, { Component, createRef } from 'react';
import './List.css';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }
    
    nodeRefs = {};

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render () {
        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>

                <TransitionGroup component="ul" className="List">
                {this.state.items.map((item, index) => {
                    // Create or reuse a ref for each item
                    if (!this.nodeRefs[item]) {
                    this.nodeRefs[item] = createRef();
                    }

                    return (
                    <CSSTransition
                        key={item} // Now a valid primitive key
                        timeout={300}
                        classNames="fade"
                        nodeRef={this.nodeRefs[item]} // ✅ use nodeRef
                    >
                        <li
                        ref={this.nodeRefs[item]} // ✅ attach ref to DOM element
                        className="ListItem"
                        onClick={() => this.removeItemHandler(index)}
                        >
                        {item}
                        </li>
                    </CSSTransition>
                    );
                })}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;