import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Menu from "../../../components/Menu";
import firebase from "../../../helper/Firebase";

class DeliveryOrderList extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("deliveryOrders");
    this.unsubscribe = null;
    this.state = {
      deliveryOrders: [],
      key: "",
    };
  }

  onResult(QuerySnapshot) {
    console.log("Got Invoice collection result.", QuerySnapshot);
  }

  onError(error) {
    console.error(error);
  }

  async getDataInvoices() {
    const deliveryOrders = [];

    await this.ref.get().then((querySnapshot) => {
      console.log("Total deliveryOrders: ", querySnapshot.size);

      querySnapshot.forEach((documentSnapshot) => {
        console.log("deliveryOrders key", documentSnapshot.id);
        console.log("data product: ", documentSnapshot.data());

        const {
          createAt,
          productId,
          qty,
          receiver,
          receiverAddress,
          sender,
        } = documentSnapshot.data();
        deliveryOrders.push({
          createAt: createAt,
          productId: productId,
          qty: qty,
          receiver: receiver,
          receiverAddress: receiverAddress,
          sender: sender,
          key: documentSnapshot.id,
        });

        this.setState({
          deliveryOrders: deliveryOrders,
        });
      });

      this.ref.onSnapshot(this.onResult, this.onError);
    });
  }

  delete(id) {
    firebase
      .firestore()
      .collection("deliveryOrders")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/deliveryOrder");

        this.getDataInvoices();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  componentDidMount() {
    console.log("did mount");
    this.getDataInvoices();
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
                      <h3 className="card-title">Data Surat Jalan</h3>
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
                            <th>Create At</th>
                            <th>Product Name</th>
                            <th>Qty</th>
                            <th>Receiver</th>
                            <th>Receiver Address</th>
                            <th>Sender</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.deliveryOrders.map(
                            (deliveryOrder, index) => (
                              <tr>
                                <td>
                                  <Link
                                    to={`/showInvoice/${deliveryOrder.key}`}
                                  >
                                    {index + 1}
                                  </Link>
                                </td>
                                <td>{deliveryOrder.createAt}</td>
                                <td>{deliveryOrder.productId}</td>
                                <td>{deliveryOrder.qty}</td>
                                <td>{deliveryOrder.receiver}</td>
                                <td>{deliveryOrder.receiverAddress}</td>
                                <td>{deliveryOrder.sender}</td>
                                <td>
                                  <Link
                                    to={`/showDeliveryOrder/${deliveryOrder.key}`}
                                    class="btn btn-info btn-sm"
                                  >
                                    <i class="fas fa-eye"></i>
                                  </Link>

                                  <Link
                                    to={`/editDeliveryOrder/${deliveryOrder.key}`}
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
                                        this.delete(deliveryOrder.key);
                                    }}
                                  >
                                    <i class="fas fa-trash-alt"></i>
                                  </a>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>

                      <row>
                        <Link
                          to="/createDeliveryOrder"
                          href="pages/widgets.html"
                          className="nav-link"
                        >
                          <p>Create new Surat Jalan</p>
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
      </div>
    );
  }
}

export default DeliveryOrderList;
