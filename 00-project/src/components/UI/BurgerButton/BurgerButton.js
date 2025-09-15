import styles from './BurgerButton.module.css'

const BurgerButton = (props) => {
    return (
        <button
            className={[styles.Button, styles[props.btnType]].join(' ')}
            onClick={props.clicked}>
                {props.children}
        </button>
    );
}
 
export default BurgerButton;