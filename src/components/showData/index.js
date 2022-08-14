import React, { useState, useEffect } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import styles from "./index.module.scss";
import NumberFormat from "react-number-format";
export default function ShowData({ title, value, unit }) {
  return (
    <div className={styles["containers"]}>
      <div className={styles["section"]}>
        <BarChartIcon className={styles["icons"]} />
        <p className={styles["title"]}>{title}</p>
      </div>
      <br />

      <div className={styles["section"]}>
        <div className={styles["value"]}>
          <NumberFormat
            value={value}
            displayType={"text"}
            thousandSeparator={true}
            
          />
         
        </div>
        <div className={styles["unit"]}>{unit}</div>
      </div>
    </div>
  );
}
