import { Component } from 'react';
import Wrapper from '../../hoc/Wrapper'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';
import {connect} from 'react-redux';

class Layout extends Component {

    // We turn the layout component to a statefull component, because it manages the state of the sidedrawer
    state = {
        showSideDrawer: true
    }

    SideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToogleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            };
        })
    }

    render() {
        return (
            <Wrapper>
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    drawerClicked={this.sideDrawerToogleHandler}></Toolbar>
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer} 
                    closed={this.SideDrawerCloseHandler}></SideDrawer>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.idToken !== null
    }
}

export default connect(mapStateToProps)(Layout);