import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Menu from "../../../components/Menu";
import firebase from "../../../helper/Firebase";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      productName: "",
      productDescription: "",
      productPrice: "",
      productQty: "",
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("products")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const product = doc.data();
        this.setState({
          key: doc.id,
          productName: product.productName,
          productDescription: product.productDescription,
          productPrice: product.productPrice,
          productQty: product.productQty,
        });

        console.log("data product editable ", doc);
      } else {
        console.log("No such document!");
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {
      productName,
      productPrice,
      productDescription,
      productQty,
    } = this.state;

    const updateRef = firebase
      .firestore()
      .collection("products")
      .doc(this.state.key);
    updateRef
      .set({
        productName: productName,
        productDescription: productDescription,
        productPrice: productPrice,
        productQty: productQty,
      })
      .then((docRef) => {
        this.setState({
          key: "",
          product: {},
        });
        this.props.history.push("/product");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

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
            <div class="container-fluid">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">EDIT PRODUCT</h3>
                </div>
                <div class="panel-body">
                  <h4>
                    <Link to="/" class="btn btn-primary">
                      Product List
                    </Link>
                  </h4>
                  <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                      <label for="product name">Product Name:</label>
                      <input
                        type="text"
                        class="form-control"
                        name="product name"
                        value={this.state.productName}
                        onChange={(e) =>
                          this.setState({ productName: e.target.value })
                        }
                        placeholder="Product Name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="product description">
                        Product Description:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="product description"
                        value={this.state.productDescription}
                        onChange={(e) =>
                          this.setState({ productDescription: e.target.value })
                        }
                        placeholder="Product Description"
                      />
                    </div>
                    <div class="form-group">
                      <label for="product price">Product Price:</label>
                      <input
                        type="text"
                        class="form-control"
                        name="product price"
                        value={this.state.productPrice}
                        onChange={(e) =>
                          this.setState({ productPrice: e.target.value })
                        }
                        placeholder="Product Price"
                      />
                    </div>
                    <div class="form-group">
                      <label for="product qty">Product Qty:</label>
                      <input
                        type="text"
                        class="form-control"
                        name="product qty"
                        value={this.state.productQty}
                        onChange={(e) =>
                          this.setState({ productQty: e.target.value })
                        }
                        placeholder="Product Qty"
                      />
                    </div>
                    <button type="submit" class="btn btn-success">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </div>
    );
  }
}
