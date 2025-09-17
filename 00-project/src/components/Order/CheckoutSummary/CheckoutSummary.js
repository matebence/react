import styles from './CheckoutSummary.module.css'
import Burger from '../../Burger/Burger'
import BurgerButton from '../../UI/BurgerButton/BurgerButton'

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We Hope it tastes well!</h1>
            <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <BurgerButton btnType="Danger" clicked={props.checkoutCancelled}>
                CANCEL
            </BurgerButton>
            <BurgerButton btnType="Success" clicked={props.checkoutContinued}>
                CONTINUE
            </BurgerButton>
        </div>
    );
}

export default CheckoutSummary;