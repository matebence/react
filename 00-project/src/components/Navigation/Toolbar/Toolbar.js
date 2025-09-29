import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToggle/DrawerToggle';
import styles from './Toolbar.module.css';

const Toolbar = (props) => {
    return (
         <header className={styles.Toolbar}>
            <DrawerToogle clicked={props.drawerClicked} />
            <div className={styles.Logo}>
                <Logo></Logo>
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
            </nav>
         </header>
    );
}

export default Toolbar;