import React, { useState, useEffect } from "react";

import { Pie, G2 } from "@ant-design/plots";
import styles from "./index.module.scss";

export default function PieChart({ title, data }) {
  const G = G2.getEngine("canvas");

  const cfg = {
    appendPadding: 10,
    data: Array.isArray(data) ? data : [],

    angleField: "Value",
    colorField: "Key",
    radius: 0.75,
    legend: false,
    label: {
      type: "spider",
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: "#fff",
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 10,
            y: 8,
            text: `${data.Key}`,
            fill: "#fff",
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 25,
            text: `${data.percent * 100}%`,
            fill: "#fff",
            fontWeight: 700,
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  const config = cfg;
  return (
    <div className={styles["chartSetting"]}>
      <div className="title">{title}</div>

      <div>
        <Pie {...config} />
      </div>
    </div>
  );
}
