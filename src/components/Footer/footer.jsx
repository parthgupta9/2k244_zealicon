import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerCont}>
      <section className={styles.infoSection}>
        <h2>Zealicon 2024</h2>
        <nav>
          <ul>
            <li>About</li>
            <li>Events</li>
            <li>Team</li>
            <li>Download App</li>
          </ul>
        </nav>
        <div className={styles.infoCont}>
          <p>Find us on</p>
          <div className={styles.socialIconsCont}>
            <a href="#">
              <img src="./images/socials/instagram.svg" alt="instagram"></img>
            </a>
            <a href="#">
              <img src="./images/socials/facebook.svg" alt="facebook"></img>
            </a>
          </div>
        </div>
        <div className={styles.infoCont}>
          <p>For any queries contact us at:</p>
          <a href="#" className={styles.emailCont}>
            <img src="./images/socials/email.svg" alt="email"></img>
            zealicon@jssaten.ac.in
          </a>
        </div>
      </section>
      <section className={styles.mapSection}>
        <h2>Reach</h2>
        <a
          href="https://www.google.com/maps/place/JSS+Academy+of+Technical+Education/@28.6141105,77.3562014,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5992452d761:0xaaa44725147c1507!8m2!3d28.6141105!4d77.3587763!16s%2Fm%2F05c14tc?entry=ttu"
          target="blank"
        >
          <img src="./images/reach.png"></img>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
