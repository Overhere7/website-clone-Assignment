import React from 'react'
import styles from './Footer.module.css';
import logo from './Assets/logo.svg';
import brand from './Assets/brand.svg';

export default function Footer() {
  return (
    <div className={styles.footer}>
      
      <div className={styles.footermainDiv}>
        <div className={styles.img1}><img src={logo} alt="log-img" /></div>
        <div className={styles.company}>
         Listed <br />
         Company <br />
         Private Company <br />
         About Us <br />
         Careers Press
        </div>

        <div className={styles.policy}>
         Privacy Policy  <br />
         Imprint <br />
         Terms of Use <br />
        </div>

        <div className={styles.policy}>
          <div>
         A : New Delhi  <br />
         E : test@gmail.com<br />
         P : +91 999999999 <br />
            
         <div className={styles.brand}><img src={brand} alt="" /></div>
          </div>
         
        </div>
 
      </div>

    </div>
  )
}
