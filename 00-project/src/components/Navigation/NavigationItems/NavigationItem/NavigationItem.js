import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className={styles.NavigationItem}>
            <NavLink to={props.link} className={({ isActive }) => (isActive ? styles.active : '')}>{props.children}</NavLink>
        </li>
    );
}

export default NavigationItem;