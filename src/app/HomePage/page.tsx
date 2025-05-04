"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Secondcomponent from "../components/home-component/SecondComponent";
import Footer from "../components/footer/Footer";
import "./home.css";
const HomePage = () => {
  return (
    <div>
      <div className="homepage-container">
        <nav className="navbar-container">
          <div className="flower-shop-logo">
            <Link to="/">Flower Shop</Link>
          </div>
          <div className="navbar-components">
            <a href="/">home</a>
            <a href="/">about</a>
            <a href="/">shop</a>
            <a href="/">contact</a>
          </div>
          <div className="add-to-cart">
            <a href="/">
              <MdOutlineShoppingCart />
            </a>
          </div>
        </nav>
      </div>
      <Secondcomponent />
      <Footer/>
    </div>
  );
};

export default HomePage;
