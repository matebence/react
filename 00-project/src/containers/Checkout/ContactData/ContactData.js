import { Component } from "react";
import BurgerButton from "../../../components/UI/BurgerButton/BurgerButton";
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";
import withRouter from "../../../hoc/withRouter";
import Input from "../../../components/UI/Input/Input";
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class ContactData extends Component {
    state = {
        formIsValid: false,
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeHolder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeHolder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeHolder: 'ZIP'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeHolder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeHolder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{
                        value: 'fastest',
                        displayValue: 'Fastest'
                    },
                    {
                        value: 'cheapest',
                        displayValue: 'Cheapest'
                    }]
                },
                value: 'fastest',
                valid: true
            }
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ings);

        this.setState({loading: true});
        
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const finalOrder = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData
        }

        console.log(finalOrder);

        this.props.onOrderBuger(finalOrder);
        // axios.post('/orders', finalOrder)
        //     .then(response => {
        //         console.log(response);
        //         this.setState({loading: false});
        //         this.props.navigate('/');
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         this.setState({loading: false});
        //     });
    }

    inputChangeHandler = (event, inputIdentifier) => {
        console.log(event.target.value);

        const updatedOrderForm = {
            ...this.state.orderForm
        };

        // deep copy from the nested object
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let  formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    checkValidity = (value, rules) => {
        let isValid = false;

        if (rules.required) {
            // isValid = value.trim() !== '' && isValid;
            isValid = value.trim() !== '';
        }

        // Other rules here like minLenght maxLenght etc ...

        return isValid;
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
                <form onSubmit={this.orderHandler}>
                    {formElementsArray.map(formElement => {
                        return (
                            <Input
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                invalid={!formElement.config.valid}
                                shouldValidate={formElement.config.validation}
                                touched={formElement.config.touched}
                                changed={(event) => this.inputChangeHandler(event, formElement.id)}>
                            </Input>
                        )
                    })}
                    {/* We should use the form submit Handler */}
                    {/* <BurgerButton btnType="Success" clicked={this.orderHandler}>ORDER</BurgerButton> */}
                    <BurgerButton btnType="Success" disabled={!this.state.formIsValid}>ORDER</BurgerButton>
                </form>
        );
        if (this.props.loading) {
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

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBuger: (orderData) => dispatch(actions.purchaseBurger(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));