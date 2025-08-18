"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import Secondcomponent from "../productlist/SecondComponent";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/herosection/HeroSection";
import Delivery from "../components/deliverydate/Delivery";
import {useRouter} from "next/navigation";
import "./home.css";
import MostPopular from "../components/mostpopular/MostPopular";

const HomePage = () => {
  const router = useRouter();
  const handlecartClick =()=>{
    router.push("/descriptionaddtocart");
  }
  return (
    <div>
      <div className="homepage-container">
        <nav className="navbar-container">
          <div className="flower-shop-logo">
            <Link href="/">Blooming Delights</Link>
          </div>
          <div className="navbar-components">
            <Link href="/">category</Link>
            <Link href="/">shop</Link>
            <Link href="/">contact</Link>
          </div>
          <div className="login-cart-button">
          <Link href="/login" className="login-container">
            <button className="login">Login</button> 
          </Link>
            <button>
            <MdOutlineShoppingCart className="cart" onClick={handlecartClick} /></button>
        </div>
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