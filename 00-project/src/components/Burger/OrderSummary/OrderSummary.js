import Wrapper from "../../../hoc/Wrapper";
import BurgerButton from "../../UI/BurgerButton/BurgerButton";

 const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return <li><span>{igKey}</span>: {props.ingredients[igKey]}</li>
    });
    return (
        <Wrapper>
            <h3>Your order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul style={{listStyle: 'none'}}>
                {ingredientSummary}
            </ul>
            <strong>Total Price: {props.price.toFixed(2)}</strong>
            <p>Continue with Checkout?</p>
            <BurgerButton btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</BurgerButton>
            <BurgerButton btnType="Success" clicked={props.purchaseContinued}>CONTINUE</BurgerButton>
        </Wrapper>
    );
 }

 export default OrderSummary;