import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Row, Col } from "react-bootstrap";
import { getData } from "../../api";
import ShowData from "../../components/showData/index";
import RodChart from "../../components/rodChart/index";
import PieChart from "../../components/pieChart/index";
import styles from "./index.module.scss";

import { rond } from "../../helpers/helpers";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LineData(props) {
  const [value, setValue] = React.useState(0);
  const [data, setdata] = useState(null);

  console.log("LineData==============>", props);

  useEffect(() => {
    if (data == null) {
      let data = setdata(
        getData({
          startHisDate: 14000131,
          endHisDate: 14010631,
          lineThreeDigitCode: 102,
        })
      );
    }
  });

  // console.log("data==================>", data);

  const roddata = [
    {
      type: "شنبه",
      value: 27,
    },
    {
      type: "یکشنبه",
      value: 25,
    },
    {
      type: "دوشنبه",
      value: 18,
    },
    {
      type: "سه شنبه",
      value: 15,
    },
    {
      type: "asdasdasdasd",
      value: 10,
    },
    {
      type: "asdasdasdasd",
      value: 5,
    },
  ];

  const getDayData = (params) => {
    if (!Array.isArray(params) || params.length === 0) return [];
    let dayData = [];
    for (let i = 0; i < params.length; i++) {
      if (params[i].Key === "Sunday")
        dayData[1] = { type: "یکشنبه", value: params[i].Value };
      if (params[i].Key === "Thursday")
        dayData[5] = { type: "پنج شنبه", value: params[i].Value };
      if (params[i].Key === "Wednesday")
        dayData[4] = { type: "چهارشنبه", value: params[i].Value };
      if (params[i].Key === "Saturday")
        dayData[0] = { type: "شنبه", value: params[i].Value };
      if (params[i].Key === "Friday")
        dayData[6] = { type: "جمعه", value: params[i].Value };
      if (params[i].Key === "Monday")
        dayData[2] = { type: "دوشنبه", value: params[i].Value };
      if (params[i].Key === "Tuesday")
        dayData[3] = { type: "سه شنبه", value: params[i].Value };
    }
    return dayData;
  };

  const getMonthData = (params) => {
    if (!Array.isArray(params) || params.length === 0) return [];
    let monthData = [];
    for (let i = 0; i < params.length; i++) {
      if (params[i].Key === 1)
        monthData[0] = { type: "فروردین", value: params[i].Value };
      if (params[i].Key === 2)
        monthData[1] = { type: "اردیبهشت", value: params[i].Value };
      if (params[i].Key === 3)
        monthData[2] = { type: "خرداد", value: params[i].Value };
      if (params[i].Key === 4)
        monthData[3] = { type: "تیر", value: params[i].Value };
      if (params[i].Key === 5)
        monthData[4] = { type: "مرداد", value: params[i].Value };
      if (params[i].Key === 6)
        monthData[5] = { type: "شهریور", value: params[i].Value };
      if (params[i].Key === 7)
        monthData[6] = { type: "مهر", value: params[i].Value };
      if (params[i].Key === 8)
        monthData[7] = { type: "آبان", value: params[i].Value };
      if (params[i].Key === 9)
        monthData[8] = { type: "آذر", value: params[i].Value };
    }
    return monthData;
  };

  const gethourData = (params) => {
    if (!Array.isArray(params) || params.length === 0) return [];
    let hourData = [];
    for (let i = 0; i < params.length; i++) {
      if (params[i].Key === 0)
        hourData[0] = { type: "0", value: params[i].Value };
      if (params[i].Key === 5)
        hourData[1] = { type: "5", value: params[i].Value };
      if (params[i].Key === 6)
        hourData[2] = { type: "6", value: params[i].Value };
      if (params[i].Key === 7)
        hourData[3] = { type: "7", value: params[i].Value };
      if (params[i].Key === 8)
        hourData[4] = { type: "8", value: params[i].Value };
      if (params[i].Key === 9)
        hourData[5] = { type: "9", value: params[i].Value };
      if (params[i].Key === 10)
        hourData[6] = { type: "10", value: params[i].Value };
      if (params[i].Key === 11)
        hourData[7] = { type: "11", value: params[i].Value };
      if (params[i].Key === 12)
        hourData[8] = { type: "12", value: params[i].Value };
      if (params[i].Key === 13)
        hourData[9] = { type: "13", value: params[i].Value };
      if (params[i].Key === 14)
        hourData[10] = { type: "14", value: params[i].Value };
      if (params[i].Key === 15)
        hourData[11] = { type: "15", value: params[i].Value };
      if (params[i].Key === 16)
        hourData[12] = { type: "16", value: params[i].Value };
      if (params[i].Key === 17)
        hourData[13] = { type: "17", value: params[i].Value };
      if (params[i].Key === 18)
        hourData[14] = { type: "18", value: params[i].Value };
      if (params[i].Key === 19)
        hourData[15] = { type: "19", value: params[i].Value };
      if (params[i].Key === 20)
        hourData[16] = { type: "20", value: params[i].Value };
      if (params[i].Key === 21)
        hourData[17] = { type: "21", value: params[i].Value };
      if (params[i].Key === 22)
        hourData[18] = { type: "22", value: params[i].Value };
      if (params[i].Key === 23)
        hourData[19] = { type: "23", value: params[i].Value };
    }

    hourData = hourData.filter((e) => e.value > 1000);
    return hourData;
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="مشخصات"
            className={
              value === 0
                ? styles["selectedTabItem"]
                : styles["unSelectedTabItem"]
            }
            {...a11yProps(0)}
          />
          <Tab
            className={
              value === 1
                ? styles["selectedTabItem"]
                : styles["unSelectedTabItem"]
            }
            label="مسافر"
            {...a11yProps(1)}
          />
          <Tab
            className={
              value == 2
                ? styles["selectedTabItem"]
                : styles["unSelectedTabItem"]
            }
            label="درآمد"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Row className={styles["Row"]}>
          <Col xs={12} sm={12} md={3} xl={3} className={styles["ColItem"]}>
            <ShowData
              title="طول خط"
              value={props?.data?.lineDist?.lineLength / 1000}
              unit="کیلومتر"
            />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} className={styles["ColItem"]}>
            <ShowData
              title="بخش"
              value={props?.data?.lineDist?.sectorDist[0]?.Key}
              unit=""
            />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} className={styles["ColItem"]}>
            <ShowData
              title="سامانه"
              value={props?.data?.lineDist?.samaneh}
              unit=""
            />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} className={styles["ColItem"]}>
            <ShowData
              title="منطقه"
              value={props?.data?.lineDist?.region}
              unit=""
            />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} className={styles["ColItem"]}>
            <ShowData
              title="تعداد وسیله"
              value={props?.data?.vehiclesDist?.count}
              unit=""
            />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} className={styles["ColItem"]}>
            <ShowData
              title="نوع قرارداد"
              value={props?.data?.lineDist?.arrangmentTypeDist[0]?.Key}
              unit=""
            />
          </Col>

          <Col xs={12} sm={12} md={3} xl={3} className={styles["ColItem"]}>
            <ShowData
              title="مسافر روزانه بر ناوگان"
              value={props?.data?.lineDist?.passPerVehCumulative?.length}
              unit="نفر بر وسیله"
            />
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Row className={styles["Row"]}>
          <Col xs={12} sm={12} md={2} xl={2} className={styles["ColItem"]}>
            <ShowData
              title="تعداد مسافر"
              value={props?.data?.passengersDist?.count}
              unit="نفر"
            />
          </Col>
          <Col xs={12} sm={12} md={5} xl={5} className={styles["ColItem"]}>
            <RodChart
              data={getDayData(props?.data?.passengersDist?.daysDist)}
              title="توزیع روزانه"
            />
          </Col>
          <Col xs={12} sm={12} md={5} xl={5} className={styles["ColItem"]}>
            <RodChart
              data={getMonthData(props?.data?.passengersDist?.monthDist)}
              title="توزیع ماهانه"
            />
          </Col>
          <Col xs={12} sm={12} md={12} xl={12} className={styles["ColItem"]}>
            <RodChart
              data={gethourData(props?.data?.passengersDist?.hoursDist)}
              title="توزیع ساعتی"
            />
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Row className={styles["Row"]}>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData
              title="کرایه کل"
              value={rond(props?.data?.economicDist?.totalFare)?.value}
              unit={rond(props?.data?.economicDist?.totalFare)?.unit}
            />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData
              title="یارانه کل"
              value={rond(props?.data?.economicDist?.totalSubcidy)?.value}
              unit={rond(props?.data?.economicDist?.totalSubcidy)?.unit}
            />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData
              title="درآمد کل"
              value={rond(props?.data?.economicDist?.totalIncome)?.value}
              unit={rond(props?.data?.economicDist?.totalIncome)?.unit}
            />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData
              title="کرایه بر ناوگان (ماهانه)"
              value={rond(props?.data?.economicDist?.farePerVeh)?.value}
              unit={rond(props?.data?.economicDist?.farePerVeh)?.unit}
            />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData
              title="یارانه بر ناوگان (ماهانه)"
              value={rond(props?.data?.economicDist?.subcidyPerVeh)?.value}
              unit={rond(props?.data?.economicDist?.subcidyPerVeh)?.unit}
            />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData
              title="درآمد بر ناوگان (ماهانه)"
              value={rond(props?.data?.economicDist?.incomePerVeh)?.value}
              unit={rond(props?.data?.economicDist?.incomePerVeh)?.unit}
            />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData
              title="یارانه بر سفر"
              value={rond(props?.data?.economicDist?.subcidyPerTrip)?.value}
              unit={rond(props?.data?.economicDist?.subcidyPerTrip)?.unit}
            />
          </Col>
          <Col xs={12} sm={12} md={8} xl={8} className={styles["ColItem"]}>
            <PieChart
              title="توزیع درآمد نقدی و کارتی"
              data={props?.data?.economicDist?.cardOrCashDist}
            />
          </Col>
        </Row>
      </TabPanel>
    </Box>
  );
}
