import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./index.module.scss";
import "../../styles/_global.scss";

export default function LineChart({ data, title, yTitle }) {
  const config = {
    data,
    padding: "auto",
    xField: "type",
    yField: "value",
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return (
    <Row className={styles["chartSetting"]}>
      <Col xs={12} sm={12} md={12} xl={12}>
        <div className="title">{title}</div>
      </Col>

      <Col xs={12} sm={12} md={12} xl={12}>
        <div className={styles["verticalText"]}>{yTitle}</div>
        <Line {...config}  />
      </Col>
    </Row>
  );
}
