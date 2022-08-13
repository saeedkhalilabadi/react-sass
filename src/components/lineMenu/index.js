import React, { useState, useEffect } from "react";

import styles from "./style.module.scss";
import { FaFilter } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SelectComponent from "../selectBox";
import DatePicker from "../../components/DatePicker";
import axios from "../axios/axios-user";
import { ObjectToQueryString, GetHeaders } from "../../helpers/helpers";

export default function LineMenu({ onGetData }) {
  const [fillters, setfillters] = useState(null);
  const [lines, setlines] = useState([]);

  const [selectedLine, setSelectedLine] = useState(null);
  const [selectedDayStart, setSelectedDayStart] = useState(null);
  const [selectedDayEnd, setSelectedDayEnd] = useState(null);
  const [passengersDist, setpassengersDist] = useState(null);
  const [lineDist, setlineDist] = useState(null);
  const [vehiclesDist, setvehiclesDist] = useState(null);
  const [economicDist, seteconomicDist] = useState(null);
  const [data, setdata] = useState([]);

  useEffect(() => {
    if (fillters === null) {
      console.log("hello", fillters);
      getFilters();
    }
  });

  async function getFilters() {
    let headers = await GetHeaders();

    console.log("====>", headers);
    await axios
      .get("/Filters", headers)
      .then(async (response) => {
        if (response.data.statusCode == 200) {
          console.log("data================>", response.data.detail);
          setfillters(response.data.detail);
          await setlines([]);
          response.data.detail.lines.map((line) => {
            setlines((oldArray) => [...oldArray, { value: line, label: line }]);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function getLineData(params) {
    let headers = await GetHeaders();
    let queryData = await ObjectToQueryString(params);
    Promise.all([
      axios
        .get("/PassengersDist?" + queryData, headers)
        .then(async (response) => {
          if (response.data.statusCode === 200) {
            setpassengersDist(response.data.detail);
          }
        }),
      axios.get("/LineDist?" + queryData, headers).then(async (response) => {
        if (response.data.statusCode === 200) {
          setlineDist(response.data.detail);
        }
      }),
      axios
        .get("/VehiclesDist?" + queryData, headers)
        .then(async (response) => {
          if (response.data.statusCode === 200) {
            setvehiclesDist(response.data.detail);
          }
        }),
      axios
        .get("/EconomicDist?" + queryData, headers)
        .then(async (response) => {
          if (response.data.statusCode === 200) {
            seteconomicDist(response.data.detail);
          }
        }),
    ]).then(() => {
      console.log("done", passengersDist, economicDist, vehiclesDist, lineDist);
      onGetData({ passengersDist, economicDist, vehiclesDist, lineDist });
    });
  }

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
                <p>شماره خط:</p>
                <SelectComponent
                  value={selectedLine}
                  onChange={(e) => setSelectedLine(e)}
                  options={lines}
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className={styles["date-container"]}>
              <Col xs={12} sm={12} md={12} xl={12}>
                <p className={styles["date-title"]}>تاریخ:</p>
                <div className={styles["date-main"]}>
                  <p className={styles["from"]}>از</p>
                  <DatePicker onSelect={(e) => setSelectedDayStart(e)} />
                  <p className={styles["to"]}>تا</p>
                  <DatePicker onSelect={(e) => setSelectedDayEnd(e)} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <button
          className={styles["btn-filter"]}
          onClick={() =>
            getLineData({
              startHisDate:
                String(selectedDayStart.year) +
                String(selectedDayStart.month) +
                String(selectedDayStart.day),
              endHisDate:
                String(selectedDayEnd.year) +
                String(selectedDayEnd.month) +
                String(selectedDayEnd.day),
              lineThreeDigitCode: selectedLine.value,
            })
          }
        >
          اعمال فیلتر
        </button>
      </div>
    </>
  );
}
