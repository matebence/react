import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { CSSTransition } from 'react-transition-group';

class App extends Component {

  state = {
    modalIsOpen: false,
    showBlock: false
  }

  boxRef = React.createRef();

  showModal = () => {
    this.setState({modalIsOpen: true})
  }
  
  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  setShowBox = () => {
    this.setState((prevState) => {
      return { showBox: !prevState.showBox };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.setShowBox}>
          {this.state.showBox ? "Hide" : "Show"} Box
        </button>
        <br/>
        <br/>

        <CSSTransition
          in={this.state.showBox}
          timeout={300}
          classNames="fade"
          unmountOnExit
          nodeRef={this.boxRef}
          onEnter={() => console.log("🟡 onEnter")}
          onEntering={() => console.log("🟢 onEntering")}
          onEntered={() => console.log("✅ onEntered")}
          onExit={() => console.log("🔴 onExit")}
          onExiting={() => console.log("🟠 onExiting")}
          onExited={() => console.log("❌ onExited")}
        >

          <div ref={this.boxRef} className="box">
            Hello, I’m an animated box!
          </div>
        </CSSTransition>
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        <Backdrop show={this.state.modalIsOpen} />
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
