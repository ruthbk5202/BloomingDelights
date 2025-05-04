import Link from "next/link";
import styles from "./Footer.module.css"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.interestSection}>
        <h3 className={styles.sectionTitle}>ALSO OF INTEREST</h3>
        <div className={styles.interestLinks}>
          <Link href="#" className={styles.footerLink}>All Flower Arrangements</Link>
          <Link href="#" className={styles.footerLink}>Mother's Day Flowers</Link>
          <Link href="#" className={styles.footerLink}>Farmers Choice Pecities</Link>
        </div>
      </div>

      
      <div className={styles.mainFooter}>
     
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>THE BOUGS CO.</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>SERVICES</Link></li>
            <li><Link href="#" className={styles.footerLink}>WORK WITH US</Link></li>
            <li><Link href="#" className={styles.footerLink}>HELP</Link></li>
            <li><Link href="#" className={styles.footerLink}>LOCAL</Link></li>
          </ul>
        </div>

       
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>About Us</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>Events</Link></li>
            <li><Link href="#" className={styles.footerLink}>Jobs</Link></li>
            <li><Link href="#" className={styles.footerLink}>Flower Care</Link></li>
            <li><Link href="#" className={styles.footerLink}>Local Delivery</Link></li>
          </ul>
        </div>

        
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Our Difference</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>Weddings</Link></li>
            <li><Link href="#" className={styles.footerLink}>Affiliates</Link></li>
            <li><Link href="#" className={styles.footerLink}>Help Center</Link></li>
            <li><Link href="#" className={styles.footerLink}>Los Angeles</Link></li>
          </ul>
        </div>

      
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Press</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>Corporate Gifts</Link></li>
            <li><Link href="#" className={styles.footerLink}>Florist Partners</Link></li>
            <li><Link href="#" className={styles.footerLink}>Shipping</Link></li>
            <li><Link href="#" className={styles.footerLink}>San Francisco</Link></li>
          </ul>
        </div>

       
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Bours Video</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>Coupons</Link></li>
            <li><Link href="#" className={styles.footerLink}>STORE LOCATIONS</Link></li>
            <li><Link href="#" className={styles.footerLink}>Terms of Use</Link></li>
            <li><Link href="#" className={styles.footerLink}>New York City</Link></li>
          </ul>
        </div>

       
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Blog</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>eGift Card</Link></li>
            <li><Link href="#" className={styles.footerLink}>Beverly Hills, CA</Link></li>
            <li><Link href="#" className={styles.footerLink}>Accessibility</Link></li>
            <li><Link href="#" className={styles.footerLink}>Dallas</Link></li>
          </ul>
        </div>

      
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Site Map</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>Students & Gards</Link></li>
            <li><Link href="#" className={styles.footerLink}>Orange County, CA</Link></li>
            <li><Link href="#" className={styles.footerLink}>Privacy Policy</Link></li>
            <li><Link href="#" className={styles.footerLink}>Chicago</Link></li>
          </ul>
        </div>
      </div>

      
      <div className={styles.copyright}>
        <p>COPYRIGHT 2025, THE BOUGS COMPANY</p>
        <p className={styles.cookiePolicy}>
          We use our own and third party cookies and tracking technologies to give you the best shopping experience. 
          For more information, see our <Link href="#" className={styles.footerLink}>Privacy Policy</Link>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;