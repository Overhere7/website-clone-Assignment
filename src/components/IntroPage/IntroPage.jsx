import React from "react";
import styles from "./IntroPage.module.css";
import BgImg from "./Assets/Rectangle 10.svg";

export default function IntroPage() {
  return (
    <div className={styles.BgImg}>
      <div className={styles.IntroText}>
        <div>VALUATIONS</div>
        <div>MADE SIMPLE</div>
        <div>WITH</div>
        <div className={styles.BrandName}>
          <div>EQTBOOM</div>
        </div>
        <div className={styles.IntroComment}>
          Power your valuation with our expertise
        </div>
        <img src={BgImg} alt=""  className={styles.MeterImg}/>
      </div>
    </div>
  );
}
