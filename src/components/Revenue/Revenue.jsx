import React from 'react'
import styles from './Revenue.module.css';
import running from './Assets/running.svg';
import group13 from './Assets/Group 13.svg';
import revenue from './Assets/revenue.svg';
import revenue2 from './Assets/revenue2.svg';
import Profile from './Assets/profile.svg';

export default function Revenue() {
  return (
    <div className={styles.chartsMainDiv}>

      <div className={styles.circle1}>
        <div className={styles.circle2}>
          <div className={styles.circle3}>
            <img src={running} alt="running-img" />
          </div>
        </div>
      </div>

      <div className={styles.revenuemaindiv}>
        <img className={styles.group13} src={group13} alt="" />
        <img className={styles.revenue} src={revenue}  alt="" />
        <img className={styles.revenue2} src={revenue2} alt="" />
        <img className={styles.profile} src={Profile} alt="" />
      </div>

    </div>
  )
}
