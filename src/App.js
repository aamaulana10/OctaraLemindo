import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./helper/Navigation";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* <Content /> */}
      <Navigation />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
