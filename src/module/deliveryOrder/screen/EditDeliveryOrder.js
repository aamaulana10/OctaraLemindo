import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../../helper/Firebase";

class EditDeliveryOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
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
    this.getDataDeliveryOrder();
    this.getDataProduct();
  }

  getDataDeliveryOrder() {
    const ref = firebase
      .firestore()
      .collection("deliveryOrders")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const deliveryOrder = doc.data();

        console.log("DO ", deliveryOrder);

        this.setState({
          key: doc.id,
          createAt: deliveryOrder.createAt,
          productId: deliveryOrder.productId,
          qty: deliveryOrder.qty,
          receiver: deliveryOrder.receiver,
          receiverAddress: deliveryOrder.receiverAddress,
          sender: deliveryOrder.sender,
        });

        console.log("data deliveryOrder editable ", doc);
      } else {
        console.log("No such document!");
      }
    });
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

    const deliveryOrders = firebase
      .firestore()
      .collection("deliveryOrders")
      .doc(this.state.key);

    deliveryOrders
      .set({
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
        console.error("Error adding DO: ", error);
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
                <h3 class="panel-title">EDIT DELIVERY ORDER</h3>
              </div>
              <div class="panel-body">
                <h4>
                  <Link to="/invoice" class="btn btn-primary">
                    DELIVERY ORDER List
                  </Link>
                </h4>
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
                      onChange={(e) => this.setState({ qty: e.target.value })}
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
                        this.setState({ receiverAddress: e.target.value })
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
    );
  }
}

export default EditDeliveryOrder;
