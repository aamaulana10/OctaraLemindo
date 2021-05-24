import React, { Component } from "react";
import firebase from "../../../helper/Firebase";
import Menu from "../../../components/Menu";
import Header from "../../../components/Header";

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
      productDescription: "",
      productQty: 0,
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      productName,
      productDescription,
      productPrice,
      productQty,
    } = this.state;

    console.log(`Form submitted:`);
    console.log(`productName: ${productName}`);
    console.log(`productPrice: ${productPrice}`);
    console.log(`productDescription: ${productDescription}`);
    console.log(`productQty: ${productQty}`);

    const products = firebase.firestore().collection("products");

    products
      .add({
        productName,
        productPrice,
        productDescription,
        productQty,
      })
      .then((docRef) => {
        console.log("doc ref ", docRef);

        this.setState({
          productName: "",
          productPrice: "",
          productDescription: "",
          productQty: 0,
        });
        this.props.history.push("/product");
      })
      .catch((error) => {
        console.error("Error adding product: ", error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header"></section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Buat produk baru</h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div style={{ marginTop: 10 }}>
                        <form onSubmit={(e) => this.onSubmit(e)}>
                          <div className="form-group">
                            <label>Product Name: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.productName}
                              onChange={(e) =>
                                this.setState({ productName: e.target.value })
                              }
                            />
                          </div>
                          <div className="form-group">
                            <label>Product Description: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.productDescription}
                              onChange={(e) =>
                                this.setState({
                                  productDescription: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="form-group">
                            <label>Product Price: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.productPrice}
                              onChange={(e) =>
                                this.setState({ productPrice: e.target.value })
                              }
                            />
                          </div>
                          <div className="form-group">
                            <label>Product Quantity: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.productQty}
                              onChange={(e) =>
                                this.setState({ productQty: e.target.value })
                              }
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="submit"
                              value="Create Product"
                              className="btn btn-primary"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </div>
    );
  }
}
