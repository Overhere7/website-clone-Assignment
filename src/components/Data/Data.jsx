import React from 'react'
import styles from './Data.module.css';
import logos from './Assets/logos.svg'
import analysis from './Assets/analysis.svg'
import centerimage from './Assets/centerimage.svg'
import profile from './Assets/profile.svg'
import DataChart from './Assets/DataChart.svg'
import graph from './Assets/graphimg.svg'
import revenue from './Assets/revenueimg.svg'


export default function Data() {
  return (
    <div className={styles.BgImg}>
      <div className={styles.IntroText}>
        <div>PRIVATE </div>
        <div className={styles.BrandName}>
          <div> COMPANY </div>
        </div>
        <div> DATA</div>
      </div>
        <div className={styles.IntroComment}>
        You can now value a business in minutes with our <br /> powerful all-in-one
        </div>
        <div className={styles.companylogo}><img src={logos} alt="" /></div>
       
       <div className={styles.images}>

        <div>
          <div><img className={styles.smallimage} src={analysis} alt="" /></div>
         <div><img className={styles.smallimage} src={DataChart} alt="" /></div>
        </div>

        <div>
          <div><img className={styles.bigimage} src={centerimage} alt="" /></div>
        </div>

        <div>
          <div><img  className={styles.smallimage} src={revenue} alt="" /></div>
         <div><img className={styles.smallimage} src={graph} alt="" /></div>
        </div>

        </div>

          <div className={styles.profile}>
               <div>“ Glauben oder nicht glauben, Lorem Ipsum ist <br /> nicht nur ein zufälliger Text. Er hat Wurzeln aus der Lateinischen " </div>
            <img src={profile} alt="" />
            </div>
          
            <div className={styles.border}> 
          </div>
       

    </div>
  )
}
