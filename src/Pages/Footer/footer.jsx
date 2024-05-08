import React from 'react'
// import { Link } from 'react-router-dom';
import Instagram from '../../assets/insta.png'
import Gmail from '../../assets/gmail.png'
import Footer_Map from '../../assets/footer_map.png'
import Facebook from '../../assets/facebook.png'
import styles from './footer.module.css'

const footer = () => {
  return (
    <>
    <div className={`${styles.mainContainer}`}>
    <div className={`${styles.leftContainer}`}>
      <ul>
        <li className={`${styles.textBlue}`}>Zealicon 2024</li>
        <li>About</li>
        <li>Events</li>
        <li>Team</li>
        <li>Download App</li>
      </ul>
      <ul>
        <li>Find us on</li>
        <li><img className={`${styles.icon}`} src={Instagram} alt="" /> <img className={`${styles.icon}`} src={Facebook} alt="" /></li>
      </ul>
      <ul>
        <li>For any queries contact us at: </li>
        <li className={`${styles.contact}`}><img className={`${styles.icon} ${styles.gmail_icon}`} src={Gmail} alt="" />zealicon@jssaten.ac.in</li>
      </ul>
    </div>
    <div className={`${styles.rightContainer}`}>
      <ul>
      <li className={`${styles.textBlue}`}>Reach</li>
      <li><img className={`${styles.footer_map}`} src={Footer_Map} alt="" /></li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default footer