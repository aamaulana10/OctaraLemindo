import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Welcome from "../module/auth/screen/Welcome";
import CreateDeliveryOrder from "../module/deliveryOrder/screen/CreateDeliveryOrder";
import DeliveryOrderList from "../module/deliveryOrder/screen/DeliveryOrderList";
import EditDeliveryOrder from "../module/deliveryOrder/screen/EditDeliveryOrder";
import ShowDeliveryOrder from "../module/deliveryOrder/screen/ShowDeliveryOrder";
import CreateInvoice from "../module/invoice/screen/CreateInvoice";
import EditInvoice from "../module/invoice/screen/EditInvoice";
import InvoiceList from "../module/invoice/screen/InvoiceList";
import ShowInvoice from "../module/invoice/screen/ShowInvoice";
import LandingPage from "../module/landingPage/screen/LandingPage";
import CreateProduct from "../module/product/screen/CreateProduct";
import EditProduct from "../module/product/screen/EditProduct";
import ProductList from "../module/product/screen/ProductList";
import ShowProduct from "../module/product/screen/ShowProduct";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/admin" exact component={ProductList} />
        <Route path="/product" exact component={ProductList} />
        <Route path="/editProduct/:id" component={EditProduct} />
        <Route path="/createProduct" component={CreateProduct} />
        <Route path="/showProduct/:id" component={ShowProduct} />
        <Route path="/invoice" exact component={InvoiceList} />
        <Route path="/editInvoice/:id" component={EditInvoice} />
        <Route path="/createInvoice" component={CreateInvoice} />
        <Route path="/showInvoice/:id" component={ShowInvoice} />
        <Route path="/deliveryOrder" exact component={DeliveryOrderList} />
        <Route path="/editDeliveryOrder/:id" component={EditDeliveryOrder} />
        <Route path="/createDeliveryOrder" component={CreateDeliveryOrder} />
        <Route path="/showDeliveryOrder/:id" component={ShowDeliveryOrder} />
      </div>
    );
  }
}
