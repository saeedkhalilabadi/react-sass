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
      if (params[i].key === "Sunday")
        dayData[1] = { type: "یکشنبه", value: params[i].value };
      if (params[i].key === "Thursday")
        dayData[5] = { type: "پنج شنبه", value: params[i].value };
      if (params[i].key === "Wednesday")
        dayData[4] = { type: "چهارشنبه", value: params[i].value };
      if (params[i].key === "Saturday")
        dayData[0] = { type: "شنبه", value: params[i].value };
      if (params[i].key === "Friday")
        dayData[6] = { type: "جمعه", value: params[i].value };
      if (params[i].key === "Monday")
        dayData[2] = { type: "دوشنبه", value: params[i].value };
      if (params[i].key === "Tuesday")
        dayData[3] = { type: "سه شنبه", value: params[i].value };
    }
    console.log("dayData------------------>", dayData);
    return dayData;
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
            <RodChart data={roddata} title="توزیع ماهانه" />
          </Col>
          <Col xs={12} sm={12} md={12} xl={12} className={styles["ColItem"]}>
            <RodChart data={roddata} title="توزیع ساعتی" />
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Row className={styles["Row"]}>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData title="کرایه کل" value={"100400"} unit="میلیاردریال" />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData title="یارانه کل" value="100400" unit="میلیاردریال" />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData title="درآمد کل" value="100400" unit="میلیاردریال" />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData
              title="کرایه بر ناوگان (ماهانه)"
              value="100400"
              unit="میلیاردریال"
            />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData
              title="یارانه بر ناوگان (ماهانه)"
              value="100400"
              unit="میلیاردریال"
            />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData
              title="درآمد بر ناوگان (ماهانه)"
              value="100400"
              unit="میلیاردریال"
            />
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} className={styles["ColItem"]}>
            <ShowData title="یارانه بر سفر" value="0" unit="ریال" />
          </Col>
          <Col xs={12} sm={12} md={8} xl={8} className={styles["ColItem"]}>
            <PieChart title="توزیع درآمد نقدی و کارتی" data={roddata} />
          </Col>
        </Row>
      </TabPanel>
    </Box>
  );
}
