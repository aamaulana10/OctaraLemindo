import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../../helper/Firebase";
export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("products");
    this.unsubscribe = null;
    this.state = {
      products: [],
      key: "",
    };
  }

  onResult(QuerySnapshot) {
    console.log("Got Users collection result.", QuerySnapshot);
  }

  onError(error) {
    console.error(error);
  }

  async getDataProduct() {
    const products = [];

    await this.ref.get().then((querySnapshot) => {
      console.log("Total users: ", querySnapshot.size);

      querySnapshot.forEach((documentSnapshot) => {
        console.log("product key", documentSnapshot.id);
        console.log("data product: ", documentSnapshot.data());

        const {
          productName,
          productDescription,
          productQty,
          productPrice,
        } = documentSnapshot.data();
        products.push({
          productName: productName,
          productDescription: productDescription,
          productQty: productQty,
          productPrice: productPrice,
          key: documentSnapshot.id,
        });

        this.setState({
          products: products,
        });
      });

      this.ref.onSnapshot(this.onResult, this.onError);
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

  componentDidMount() {
    console.log("did mount");
    this.getDataProduct();
  }

  render() {
    return (
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
                    <h3 className="card-title">Data produk</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.products.map((product, index) => (
                          <tr>
                            <td>
                              <Link to={`/showProduct/${product.key}`}>
                                {index + 1}
                              </Link>
                            </td>
                            <td>{product.productName}</td>
                            <td>{product.productDescription}</td>
                            <td>{product.productPrice}</td>
                            <td>{product.productQty}</td>
                            <td>
                              <Link
                                to={`/showProduct/${product.key}`}
                                class="btn btn-info btn-sm"
                              >
                                <i class="fas fa-eye"></i>
                              </Link>

                              <Link
                                to={`/editProduct/${product.key}`}
                                class="btn btn-warning btn-sm"
                              >
                                <i class="fas fa-pencil-alt"></i>
                              </Link>
                              <a
                                href="#"
                                class="btn btn-danger btn-sm"
                                onClick={(e) => {
                                  if (
                                    window.confirm(
                                      "Are you sure you wish to delete this item?"
                                    )
                                  )
                                    this.delete(product.key);
                                }}
                              >
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <row>
                      <Link
                        to="/createProduct"
                        href="pages/widgets.html"
                        className="nav-link"
                      >
                        <p>Create new product</p>
                      </Link>
                    </row>
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
    );
  }
}
