import { Component } from "react";
import Layout from './components/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Routes, Route } from 'react-router-dom';
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import {connect} from "react-redux";
import * as actionTypes from "./store/actions/index";

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Routes>
          <Route path="/" element={<BurgerBuilder />} />
          <Route path="/auth" element={<Auth />} />
      </Routes>
    );

    if (this.props.isAuthenticated) {
      routes = (
      <Routes>
          <Route path="/" element={<BurgerBuilder />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/checkout/*" element={<Checkout />} />
      </Routes>
      );
    }

    return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actionTypes.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);