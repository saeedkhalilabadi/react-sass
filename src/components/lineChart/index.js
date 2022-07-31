import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import styles from "./index.module.scss";
import { Row, Col, Container } from "react-bootstrap";

export default function LineChart({ data, title, xTitle, yTitle }) {
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
    
      <Row>
        <Col xs={12} sm={12} md={12} xl={12}>
          {title}
        </Col>

        <Col xs={2} sm={2} md={2} xl={2} className={styles["verticalText"]}>
          {xTitle}
        </Col>
        <Col xs={10} sm={10} md={10} xl={10}>
          <Line {...config} />
        </Col>
        <Col xs={12} sm={12} md={12} xl={12}>
          {yTitle}
        </Col>
      </Row>
    
  );
}
