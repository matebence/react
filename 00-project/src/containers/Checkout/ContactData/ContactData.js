import { Component } from "react";
import BurgerButton from "../../../components/UI/BurgerButton/BurgerButton";
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";
import withRouter from "../../../hoc/withRouter";

class ContactData extends Component {
    state = {
        loading: false,
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({loading: true});

        const finalOrder = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Bence'
            }
        }

        setTimeout(() => {
            axios.post('/orders', finalOrder)
                .then(response => {
                    console.log(response);
                    this.setState({loading: false});
                    this.props.navigate('/');
                })
                .catch(error => {
                    console.log(error);
                    this.setState({loading: false});
                });
        }, 5000);
    }

    render () {
        let form = (
                <form>
                    <input className={styles.Input} type="text" name="name" placeholder="Your Name"></input>
                    <input className={styles.Input} type="email" name="email" placeholder="Your Email"></input>
                    <input className={styles.Input} type="text" name="street" placeholder="Street"></input>
                    <input className={styles.Input} type="text" name="postal" placeholder="Postal"></input>
                    <BurgerButton btnType="Success" clicked={this.orderHandler}>ORDER</BurgerButton>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default withRouter(ContactData);