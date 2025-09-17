import { Component } from "react";
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {

    state = {
        orders: [{
            id: 1,
            ingredients: {
                salad: 1,
                bacon: 1, 
                cheese: 1,
                meat: 1
            },
            price: 5.64
        }],
        loading: true
    }

    // DUMMY
    componentDidMount() {
        axios.get('/orders')
            .then(response => {
                this.setState({loading: false});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.orders.map(order => {
                        return <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price}>
                        </Order>
                    })
                }
            </div>
        );
    }
}

export default Orders