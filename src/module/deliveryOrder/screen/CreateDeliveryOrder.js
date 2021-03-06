import React, { Component } from "react";
import Header from "../../../components/Header";
import Menu from "../../../components/Menu";
import firebase from "../../../helper/Firebase";

class CreateDeliveryOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createAt: "",
      productId: "",
      qty: 0,
      receiver: "",
      receiverAddress: "",
      sender: "",
      products: [],
    };
  }

  componentDidMount() {
    this.getDataProduct();
  }

  async getDataProduct() {
    const products = [];

    const ref = firebase.firestore().collection("products");

    await ref.get().then((querySnapshot) => {
      querySnapshot.forEach((documentSnapshot) => {
        console.log("product key", documentSnapshot.id);
        console.log("data product do: ", documentSnapshot.data());

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

      console.log("data products: ", this.state.products);

      ref.onSnapshot(this.onResult, this.onError);
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      createAt,
      productId,
      qty,
      receiver,
      receiverAddress,
      sender,
    } = this.state;

    console.log(`Form submitted:`);
    console.log(`productId: ${productId}`);

    const deliveryOrders = firebase.firestore().collection("deliveryOrders");

    deliveryOrders
      .add({
        createAt,
        productId,
        qty,
        receiver,
        receiverAddress,
        sender,
      })
      .then((docRef) => {
        console.log("doc ref ", docRef);

        this.setState({
          createAt: "",
          productId: "",
          qty: 0,
          receiver: "",
          receiverAddress: "",
          sender: "",
        });
        this.props.history.push("/deliveryOrder");
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
                      <h3 className="card-title">Buat Surat Jalan baru</h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div style={{ marginTop: 10 }}>
                        <form onSubmit={(e) => this.onSubmit(e)}>
                          <div className="form-group">
                            <label>Create At: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.createAt}
                              onChange={(e) =>
                                this.setState({ createAt: e.target.value })
                              }
                            />
                          </div>
                          {/* <div className="form-group">
                          <label>Product ID: </label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.productId}
                            onChange={(e) =>
                              this.setState({
                                productId: e.target.value,
                              })
                            }
                          />
                        </div> */}

                          <div className="form-group">
                            <label>Product</label>
                            <select
                              className="form-control select2"
                              style={{ width: "100%" }}
                              value={this.state.productId}
                              onChange={(e) =>
                                this.setState({ productId: e.target.value })
                              }
                            >
                              {this.state.products.map((product, index) => (
                                <option selected={product.productId}>
                                  {product.productName}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="form-group">
                            <label>Qty: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.qty}
                              onChange={(e) =>
                                this.setState({ qty: e.target.value })
                              }
                            />
                          </div>
                          <div className="form-group">
                            <label>Receiver: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.receiver}
                              onChange={(e) =>
                                this.setState({ receiver: e.target.value })
                              }
                            />
                          </div>

                          <div className="form-group">
                            <label>Receiver Address: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.receiverAddress}
                              onChange={(e) =>
                                this.setState({
                                  receiverAddress: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="form-group">
                            <label>Sender: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.sender}
                              onChange={(e) =>
                                this.setState({ sender: e.target.value })
                              }
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="submit"
                              value="Create Surat Jalan"
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

export default CreateDeliveryOrder;
