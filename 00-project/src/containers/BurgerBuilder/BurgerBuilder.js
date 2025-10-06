import { Component } from "react";
import Wrapper from "../../hoc/Wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-orders';
import WithErrorHandler from "../../hoc/withErrorHandler";
import withRouter from "../../hoc/withRouter";
import {connect} from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {

    state = {
        purchasing: false
    }

    // We dont fetch here the ingredients from the server
    componentDidMount() {
        // this.props.onInitIngredients();
    }

    updatePurchaseHandler = (ingredients) => {
        const sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({purchasing: true});
        } else {
            const { navigate } = this.props;
            navigate('/auth');
        }
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // Handelt via Redux, no need for query params here
        // const queryParams = [];
        
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push('price=' + this.state.totalPrice);
        // const queryString = queryParams.join('&');

        // this.props.navigate({
        // pathname: '/checkout',
        // search: '?' + queryString
        // });

        this.props.onInitPurchase();
        this.props.navigate({pathname: '/checkout'});
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; 
        }

        let orderSummary = 
            <OrderSummary 
                ingredients={this.props.ings}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}>
            </OrderSummary>

        return (
            <Wrapper>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.props.ings}></Burger>      
                <BuildControls 
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseHandler(this.props.ings)}
                    ordered={this.purchaseHandler}
                    isAuth={this.props.isAuthenticated}
                    price={this.props.price}></BuildControls>                     
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.idToken !== null

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
        onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(withRouter(BurgerBuilder), axios));
export { BurgerBuilder }; 