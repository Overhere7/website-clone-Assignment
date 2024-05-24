import React from "react";
import styles from "./Charts.module.css";
import analysis from "./Assets/analysis.svg";
import charts from "./Assets/charts.svg";
import text from "./Assets/text.svg";

export default function Charts() {
  return (
    <div className={styles.body}>
    <div className={styles.chartsMainDiv}>
      <div>
        <img className={styles.text} src={text} alt="" />
      </div>
      <div className={styles.images}>
        <img className={styles.analysis} src={analysis} alt="" />
        <img className={styles.charts} src={charts} alt="" />
      </div>
    </div>
    </div>
  );
}
