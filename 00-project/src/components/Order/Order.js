import styles from './Order.module.css'

const Order = (props) => {
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

export default Order;