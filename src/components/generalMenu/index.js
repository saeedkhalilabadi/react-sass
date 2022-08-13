import React from "react";
import { FaFilter } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SelectComponent from "../selectBox";

import { useState } from "react";
import DatePicker from "../../components/DatePicker";
import styles from "./style.module.scss";
export default function GeneralMenu() {
  const [selectedDayStart, setSelectedDayStart] = useState(null);
  const [selectedDayEnd, setSelectedDayEnd] = useState(null);
  return (
    <>
      <div className={styles["container"]}>
        <div>
          <div className={styles["title-menu"]}>
            <i>
              <FaFilter className={styles["iconFilter"]} />
            </i>
            <p>فیلتر اطلاعات</p>
          </div>
          <Container>
            <Row className={styles["row-container"]}>
              <Col xs={12} sm={12} md={12} xl={12}>
                <p>سامانه:</p>
                <SelectComponent />
              </Col>
              <Col xs={12} sm={12} md={12} xl={12}>
                <p>شرکت:</p>
                <SelectComponent />{" "}
              </Col>
              <Col xs={12} sm={12} md={12} xl={12}>
                <p>نوع قرارداد:</p>
                <SelectComponent />{" "}
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className={styles["date-container"]}>
              <Col>
                <p className={styles["dateTitle"]}>تاریخ:</p>
                <div className={styles["date-main"]}>
                  <p className={styles["from"]}>از</p>
                  <DatePicker
                    onSelect={(e) => console.log(e)}
                   
                  />
                  <p className={styles["to"]}>تا</p>

                  <DatePicker
                    onSelect={(e) => console.log(e)}
                   
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <button className={styles["btn-filter"]}>اعمال فیلتر</button>
      </div>
    </>
  );
}
