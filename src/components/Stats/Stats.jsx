import React from 'react'
import styles from './Stats.module.css';
import img3 from './Assets/3.svg';
import img28 from './Assets/28.svg';
import img50 from './Assets/50.svg';
import img470 from './Assets/470.svg';
import lady from './Assets/lady.svg';
import stats from './Assets/stats.svg';
import text from './Assets/text.svg';
import bullets from './Assets/bullets.svg';

export default function Stats() {
  return (
    <div>
    <div className={styles.statsMainDiv}>
      <div className={styles.stats}>
         <img src={stats} alt="text-img" />
      </div>

      <div className={styles.numbers}>
        <img className={styles.img3} src={img3} alt="img-3" />
        <img className={styles.img28} src={img28} alt="img-28" />
        <img className={styles.img50} src={img50} alt="img-50" />
        <img className={styles.img470} src={img470} alt="img-470" />
      </div>

      <div className={styles.middleContent}>
        <div className={styles.middleContent1}>
        <img className={styles.text} src={text} alt="text-img" />
        <img className={styles.bullets} src={bullets} alt="text-img" />

        </div>
        <div className={styles.lady} >
        <img src={lady} alt="lady-img" />
        </div>
        </div>
    </div>
    </div>
  )
}
