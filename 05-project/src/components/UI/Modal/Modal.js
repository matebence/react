import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const Modal = (props) => {
    return (
        <Wrapper>
            <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
            <div className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
            </div>
        </Wrapper>

    )
}

export default Modal;