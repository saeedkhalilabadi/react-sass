import React, { useState, useEffect } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import styles from "./index.module.scss";
import { Row, Col, Container } from "react-bootstrap";

export default function showData({ title, value, unit }) {
  return (
    <div className={styles["containers"]}>
      <div className={styles["section"]}>
        <BarChartIcon className={styles["icons"]} />
        <p className={styles["title"]}>{title}</p>
      </div>
      <br />

      <div className={styles["section"]}>
        <div className={styles["value"]}>{value}</div>
        <div className={styles["unit"]}>{unit}</div>
      </div>
    </div>
  );
}
