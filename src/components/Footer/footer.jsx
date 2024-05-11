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
      <li className={`${styles.textBlue}`}><a href='https://www.google.com/maps/place/JSS+Academy+of+Technical+Education/@28.6141105,77.3562014,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5992452d761:0xaaa44725147c1507!8m2!3d28.6141105!4d77.3587763!16s%2Fm%2F05c14tc?entry=ttu'>Reach</a></li>
      <li><img className={`${styles.footer_map}`} src={Footer_Map} alt="" /></li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default footer