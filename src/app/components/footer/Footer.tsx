import Link from "next/link";
import styles from "./Footer.module.css"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.interestSection}>
        <h3 className={styles.sectionTitle}>ALSO OF INTEREST</h3>
        <div className={styles.interestLinks}>
          <Link href="#" className={styles.footerLink}>All Flower Arrangements</Link>
          <Link href="#" className={styles.footerLink}>Dashin&apos;s Tihar Sets</Link>
          <Link href="#" className={styles.footerLink}>Local Farmers Choice</Link>
        </div>
      </div>

      
      <div className={styles.mainFooter}>
     
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Blooming Delights</h4>
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
          <h4 className={styles.columnTitle}>Why Choose Us</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>weddings</Link></li>
            <li><Link href="#" className={styles.footerLink}>Affiliate Program</Link></li>
            <li><Link href="#" className={styles.footerLink}>Help Center</Link></li>
            <li><Link href="#" className={styles.footerLink}>Pokhara</Link></li>
          </ul>
        </div>

      
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Press</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>Corporate Gifts</Link></li>
            <li><Link href="#" className={styles.footerLink}>Local Florist Network</Link></li>
            <li><Link href="#" className={styles.footerLink}>Delivery Info</Link></li>
            <li><Link href="#" className={styles.footerLink}>Chitwan</Link></li>
          </ul>
        </div>

       
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Our Gallary</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>Special offers or discount</Link></li>
            <li><Link href="#" className={styles.footerLink}>OUR LOCATION</Link></li>
            <li><Link href="#" className={styles.footerLink}>Terms of Use</Link></li>
            <li><Link href="#" className={styles.footerLink}>Biratnagar</Link></li>
          </ul>
        </div>

       
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Blog</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>eGift Card</Link></li>
            <li><Link href="#" className={styles.footerLink}>kathmandu, Nepal</Link></li>
            <li><Link href="#" className={styles.footerLink}>Accessibility</Link></li>
            <li><Link href="#" className={styles.footerLink}>nepalgunj</Link></li>
          </ul>
        </div>

      
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Site Map</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.footerLink}>Students & Gards</Link></li>
            <li><Link href="#" className={styles.footerLink}>Damak, Jhapa</Link></li>
            <li><Link href="#" className={styles.footerLink}>Privacy Policy</Link></li>
            <li><Link href="#" className={styles.footerLink}>Gorkha</Link></li>
          </ul>
        </div>
      </div>

      
      <div className={styles.copyright}>
        <p>COPYRIGHT 2025, Blooming Delights</p>
        <p className={styles.cookiePolicy}>
          We use our own and third party cookies and tracking technologies to give you the best shopping experience. 
          For more information, see our <Link href="#" className={styles.footerLink}>Privacy Policy</Link>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;