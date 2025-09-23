import styles from './Order.module.css'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const Order = (props) => {

    // We dont distpacth here the fetch orders because there is no real server

    const ingredients = Object.entries(props.ingredients)
        .map(([key, value]) => `${key}(${value})`)
        .join(', ') + ', ';

    return (
        <div className={styles.Order}>
            <strong>Ingredients:</strong>
            <p>{ingredients.substring(0, ingredients.length - 2)}</p>
            <strong>Price:</strong>
            <p>{props.price.toFixed(2)} EU</p>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);