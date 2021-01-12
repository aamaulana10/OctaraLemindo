import React, { Component } from "react";
import firebase from "../../../helper/Firebase";
import { Link } from "react-router-dom";

class ShowProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      key: "",
    };
  }

  componentDidMount() {
    this.getProductByid();
  }

  async getProductByid() {
    console.log("param id ", this.props.match.params);

    const ref = await firebase
      .firestore()
      .collection("products")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          product: doc.data(),
          key: doc.id,
          isLoading: false,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id) {
    firebase
      .firestore()
      .collection("products")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header"></section>
        {/* Main content */}
        <section className="content">
          <div class="container-fluid">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4>
                  <Link to="/">Product List</Link>
                </h4>
                <h3 class="panel-title">{this.state.product.productName}</h3>
              </div>
              <div class="panel-body">
                <dl>
                  <dt>Description:</dt>
                  <dd>{this.state.product.productDescription}</dd>
                  <dt>Price:</dt>
                  <dd>{this.state.product.productPrice}</dd>
                  <dt>Qty:</dt>
                  <dd>{this.state.product.productQty}</dd>
                </dl>
                <Link
                  to={`/editProduct/${this.state.key}`}
                  class="btn btn-success"
                >
                  Edit
                </Link>
                &nbsp;
                <button
                  onClick={() => this.delete(this.state.key)}
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
    );
  }
}

export default ShowProduct;
