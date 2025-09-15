import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css'

const controls = [
    {label: "Salad",  type: "salad"},
    {label: "Bacon",  type: "bacon"},
    {label: "Cheese",  type: "cheese"},
    {label: "Meat",  type: "meat"}
]

const BuildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            <strong>Current Price: {props.price.toFixed(2)}</strong>
            {
                controls.map(ctrl => {
                    return (
                        <BuildControl 
                            key={ctrl.label} 
                            label={ctrl.label}
                            added={() => props.ingredientAdded(ctrl.type)}
                            removed={() => props.ingredientRemoved(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}></BuildControl>
                    )
                })
            }
            <button 
                className={styles.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
}

export default BuildControls;