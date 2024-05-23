import React from 'react'
import styles from './Values.module.css';
import companies from './Assets/companies.svg';
import meter from './Assets/meter.svg'
import chart from './Assets/charts.svg'
export default function Values() {
  return (
    <div>
        <div className={styles.heading}>Trusted by leading companies and startups</div>
        <div className={styles.companies}>
            <img src={companies} alt="" />
        </div>
        <div className={styles.values}>
        <img className={styles.meter} src={meter} alt="meter-image" />
        <img className={styles.chart} src={chart} alt="chart-img" />
        </div>
      
    </div>
  )
}
