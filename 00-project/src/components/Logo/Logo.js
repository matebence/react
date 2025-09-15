import burgerLogo from '../../assets/burger-logo.png';
import styles from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={burgerLogo} alt='Burger' />
        </div>
    )
}

export default Logo;