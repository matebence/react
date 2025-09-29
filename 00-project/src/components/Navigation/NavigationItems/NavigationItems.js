import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

const NavigationItems = (props) => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            {!props.isAuthenticated
                ? null
                : <NavigationItem link="/orders">Orders</NavigationItem>
            }
            {!props.isAuthenticated
                ? <NavigationItem link="/auth">Authenticate</NavigationItem>
                : <NavigationItem link="/logout">Logout</NavigationItem>
            }
        </ul>
    );
}

export default NavigationItems;