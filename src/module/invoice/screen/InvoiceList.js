import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Menu from "../../../components/Menu";
import firebase from "../../../helper/Firebase";

class InvoiceList extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("invoice");
    this.unsubscribe = null;
    this.state = {
      invoices: [],
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
    const invoices = [];

    await this.ref.get().then((querySnapshot) => {
      console.log("Total invoice: ", querySnapshot.size);

      querySnapshot.forEach((documentSnapshot) => {
        console.log("invoice key", documentSnapshot.id);
        console.log("data product: ", documentSnapshot.data());

        const {
          createAt,
          productId,
          qty,
          receiver,
          receiverAddress,
          sender,
          totalPrice,
        } = documentSnapshot.data();
        invoices.push({
          createAt: createAt,
          productId: productId,
          qty: qty,
          receiver: receiver,
          receiverAddress: receiverAddress,
          sender: sender,
          totalPrice: totalPrice,
          key: documentSnapshot.id,
        });

        this.setState({
          invoices: invoices,
        });
      });

      this.ref.onSnapshot(this.onResult, this.onError);
    });
  }

  delete(id) {
    firebase
      .firestore()
      .collection("invoice")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/invoice");
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
                      <h3 className="card-title">Data Invoice</h3>
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
                            <th>Total Price</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.invoices.map((invoice, index) => (
                            <tr>
                              <td>
                                <Link to={`/showInvoice/${invoice.key}`}>
                                  {index + 1}
                                </Link>
                              </td>
                              <td>{invoice.createAt}</td>
                              <td>{invoice.productId}</td>
                              <td>{invoice.qty}</td>
                              <td>{invoice.receiver}</td>
                              <td>{invoice.receiverAddress}</td>
                              <td>{invoice.sender}</td>
                              <td>{invoice.totalPrice}</td>
                              <td>
                                <Link
                                  to={`/showInvoice/${invoice.key}`}
                                  class="btn btn-info btn-sm"
                                >
                                  <i class="fas fa-eye"></i>
                                </Link>

                                <Link
                                  to={`/editInvoice/${invoice.key}`}
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
                                      this.delete(invoice.key);
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
                          to="/createInvoice"
                          href="pages/widgets.html"
                          className="nav-link"
                        >
                          <p>Create new invoice</p>
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

export default InvoiceList;
