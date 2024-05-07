import React from 'react'
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.row} ${styles.red}`}>
        <p className={styles.text}>Hello Coders!</p>
      </div>
    </div>
  )
}

export default Home