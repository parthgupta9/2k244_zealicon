import React from 'react'
import RightBhoot from '../../assets/right_bhoot.png'
import LeftBhoot from '../../assets/left_bhoot.png'
import styles from './offers.module.css'

const offers = () => {
  return (
    <>
    <div className={`${styles.mainContainer}`}>
        <h3 className={`${styles.textBlue}`}>Offers</h3>
        <div className={`${styles.container}`}>
        <img src={LeftBhoot} alt="" />
        <img src={RightBhoot} alt="" />
    </div>
    </div>
    </>
  )
}

export default offers