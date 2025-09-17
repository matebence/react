import { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import withRouter from "../../hoc/withRouter";
import ContactData from "./ContactData/ContactData";
import { Routes, Route } from 'react-router-dom';

class Checkout extends Component {

    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    checkoutContinuedHandler = () => {
        this.props.navigate('/checkout/contact-data');
    }

    checkoutCanceledHandler = () => {
        // this.props.history.goBack();
        this.props.navigate(-1);
    }

    render () {
        return (
            <div>
                <CheckoutSummary 
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCancelled={this.checkoutCanceledHandler}
                    ingredients={this.state.ingredients}></CheckoutSummary>
                <Routes>
                    <Route path="contact-data" element={<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}/>} />
                </Routes>
            </div>
        )
    }
}

export default withRouter(Checkout);