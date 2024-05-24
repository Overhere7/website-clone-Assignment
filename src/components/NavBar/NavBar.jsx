import React from 'react'
import styles from './NavBar.module.css';
import logo from './Assetes/logo 2.svg';
export default function NavBar() {
  return (
    <div>
    <div className={styles.NavBar}>
      <div className={styles.Logo}>
        <img src={logo} alt="logo image" />
      </div>
      <div className={styles.NavSections}>
        <div>Products</div>
        <div>About Us</div>
        <div>Resources</div>
        <div>Pricing</div>
        <div>Contact</div>
      </div>
      <div className={styles.SignUp_SingIn}>
        <button>Log In / Sign Up</button>
      </div>
    </div>
    </div>
  )
}
