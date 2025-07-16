"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import Secondcomponent from "../productlist/SecondComponent";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/herosection/HeroSection";
import Delivery from "../components/deliverydate/Delivery";
import "./home.css";
import MostPopular from "../components/mostpopular/MostPopular";

const HomePage = () => {
  return (
    <div>
      <div className="homepage-container">
        <nav className="navbar-container">
          <div className="flower-shop-logo">
            <Link href="/">Blooming Delights</Link>
          </div>
          <div className="navbar-components">
            <Link href="/">categories</Link>
            <Link href="/">shop</Link>
            <Link href="/">contact</Link>
          </div>
          <Link href="/login" className="login-container">
            <button className="login">Login</button> 
            <MdOutlineShoppingCart className="cart" />
          </Link>
        </nav>
      </div>
      <HeroSection/>
      <Secondcomponent />
      <MostPopular/>
      <Delivery />
      <Footer />
    </div>
  );
};

export default HomePage;