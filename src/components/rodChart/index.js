import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
import { Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";
import "../../styles/_global.scss";

export default function RodChart({ data, title, yTitle }) {
  const config = {
    columnStyle: {
      fill: "#76bba9",
      fillOpacity: 1,
      lineWidth: 0,
      stroke: "black",
      strokeOpacity: 1,
      opacity: 1,
      cursor: "pointer",
    },

    data,
    xField: "type",
    yField: "value",
    label: {
      type: "inner",
      offset: "50%",
      autoRotate: true,
      style: {
        textAlign: "center",
        fill: "#000000",
      },
    },
    xAxis: {
      label: {
        style: {
          fill: "#f8f8f8",
          opacity: 1,
        },
        autoHide: false,
        autoRotate: true,
      },
    },
    yAxis: {
      label: {
        formatter: (val) => (val >= 1000 ? `${val / 1000}K` : `${val}`),
        style: {
          fill: "#f8f8f8",
          opacity: 1,
        },
      },
    },
    meta: {
      type: {
        alias: "تست",
      },
      sales: {
        alias: "مقدار",
      },
    },
  };
  return (
    <div className={styles["chartSetting"]}>
      <div className="title">{title}</div>

      <div className={styles["verticalText"]}>{yTitle}</div>
      <div>
        <Column {...config} />
      </div>
    </div>
  );
}
