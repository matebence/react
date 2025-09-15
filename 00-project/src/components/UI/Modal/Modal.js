import { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

class Modal extends Component {

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    render() {
        return (
            <Wrapper>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
                <div className={styles.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div style={{textAlign: 'center'}}>{this.props.children}</div>
                </div>
            </Wrapper>
        );
    }


}

export default Modal;