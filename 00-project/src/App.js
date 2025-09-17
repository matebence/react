import { Component } from "react";
import Layout from './components/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Routes, Route } from 'react-router-dom';
import Orders from "./containers/Orders/Orders";

class App extends Component {

  render() {
    return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<BurgerBuilder />} />
          <Route path="/checkout/*" element={<Checkout />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </Layout>
    </div>
    );
  }
}

export default App;
