import { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import withRouter from "../../hoc/withRouter";
import ContactData from "./ContactData/ContactData";
import { Routes, Route, Navigate } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Checkout extends Component {

    // Handelt via redux
    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;

    //     for (let param of query.entries()) {
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price})
    // }

    checkoutContinuedHandler = () => {
        this.props.navigate('/checkout/contact-data');
    }

    checkoutCanceledHandler = () => {
        // this.props.history.goBack();
        this.props.navigate(-1);
    }

    hasAtLeastOneIngredient = (ingredients) => {
        return Object.values(ingredients).some(quantity => quantity > 0);
    }

    render () {
        console.log(this.props.ings);
        let summary = (
            <div>
                <Navigate to="/" />
            </div>
        )
        if (this.hasAtLeastOneIngredient(this.props.ings)) {
            const purchasedRedirect = this.props.purchased ? <Navigate to="/"></Navigate> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        checkoutContinued={this.checkoutContinuedHandler}
                        checkoutCancelled={this.checkoutCanceledHandler}
                        ingredients={this.props.ings}></CheckoutSummary>
                    <Routes>
                        {/* Handelt via Redux 
                        <Route 
                        path="contact-data"
                        element={<ContactData 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}/>} /> */}

                        <Route 
                        path="contact-data"
                        element={<ContactData />} />
                    </Routes>
                </div>
            )
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

export default connect(mapStateToProps)(withRouter(Checkout));