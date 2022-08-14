import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";

import ShowData from "../../components/showData";
import PieChart from "../../components/pieChart";
import RodChart from "../../components/rodChart";
import LineChart from "../../components/lineChart";
const contract = [
  {
    type: "دولتی",
    value: 4,
  },
  {
    type: "A",
    value: 45,
  },
  {
    type: "B",
    value: 51,
  },
];
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

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
            className={
              value === 0
                ? styles["selectedTabItem"]
                : styles["unSelectedTabItem"]
            }
            label="خط"
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
              value === 2
                ? styles["selectedTabItem"]
                : styles["unSelectedTabItem"]
            }
            label="ناوگان"
            {...a11yProps(2)}
          />
          <Tab
            className={
              value === 3
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
          <Col xs="12" sm="12" md="2" xl="2" className={styles["ColItem"]}>
            <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
              {" "}
              <ShowData title="تعداد خطوط" value={1} />
            </Col>
            <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
              {" "}
              <ShowData title="طول خطوط" value={2500} unit="کیلومتر" />
            </Col>
          </Col>
          <Col xs="12" sm="12" md="5" xl="5" className={styles["ColItem"]}>
            <PieChart title="توزیع نوع قرارداد" data={contract} />
          </Col>
          <Col xs="12" sm="12" md="5" xl="5" className={styles["ColItem"]}>
            <PieChart
              title="توزیع میانگین مسافر روزانه بر وسیله"
              data={contract}
            />
          </Col>
          <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
            <RodChart
              title="نمودار تجمعی مسافر روزانه بر وسیله"
              data={contract}
              yTitle="سهم تجمعی خطوط - درصد"
            />
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Row className={styles["Row"]}>
          <Col xs="12" sm="12" md="2" xl="2" className={styles["ColItem"]}>
            <ShowData title="تعداد مسافر" value={1} unit="نفر" />
          </Col>
          <Col xs="12" sm="12" md="10" xl="10" className={styles["ColItem"]}>
            <RodChart title="توزیع روزانه" data={contract} />
          </Col>
          <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
            <PieChart title="توزیع نوع قرارداد" data={contract} />
          </Col>
          <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
            <LineChart title="توزیع ماهیانه" data={contract} />
          </Col>
          <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
            <RodChart title="توزیع ساعتی" data={contract} />
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Row className={styles["Row"]}>
          <Col xs="12" sm="12" md="2" xl="2" className={styles["ColItem"]}>
            <ShowData title="تعداد وسیله" value={4600} />
          </Col>
          <Col xs="12" sm="12" md="4" xl="4" className={styles["ColItem"]}>
            <PieChart title="توزیع نوع قرارداد" data={contract} />
          </Col>
          <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
            <PieChart
              title="توزیع میانگین مسافر روزانه بر وسیله"
              data={contract}
            />
          </Col>
          <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
            <RodChart
              title="نمودار تجمعی مسافر روزانه بر وسیله"
              data={contract}
              yTitle="سهم تجمعی ناوگان - درصد"
            />
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Row className={styles["Row"]}>
          <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
            <Row className={styles["Row"]}>
            <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
              <ShowData title="کرایه کل" value={1} unit="میلیارد ریال" />
            </Col>
            <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
              <ShowData title="کرایه بر ناوگان (ماهانه)" value={1} unit="میلیون ریال" />
            </Col>
            <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
              <ShowData title="یارانه کل" value={1} unit="میلیارد ریال" />
            </Col>
            <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
              <ShowData title="یارانه بر ناوگان (ماهانه)" value={1} unit="نفر" />
            </Col>
            <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
              <ShowData title="تعداد مسافر" value={1} unit="میلیون ریال" />
            </Col>
            <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
              <ShowData title="درآمد کل" value={1} unit="میلیارد ریال" />
            </Col>
            <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
              <ShowData title="یارانه بر سفر" value={1} unit="ریال" />
            </Col>
            <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
            <PieChart title="توزیع درآمد براساس نوع قرارداد" data={contract} />
            </Col>
            </Row>
          </Col>
          <Col xs="12" sm="12" md="6" xl="6" className={styles["ColItem"]}>
            <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
            <PieChart title="توزیع کرایه نقدی و کارتی" data={contract} />
            
            </Col>
            <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
            <PieChart title="توزیع کرایه براساس نوع قرارداد" data={contract} />
            </Col>
            <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
            <RodChart
              title="نمودار تجمعی درآمد ماهانه بر ناوگان"
              data={contract}
              yTitle="سهم تجمعی ناوگان - درصد"
            />
          </Col>
          </Col>
          <Col xs="12" sm="12" md="12" xl="12" className={styles["ColItem"]}>
            <RodChart
              title="نمودار تجمعی یارانه بر سفر"
              data={contract}
              yTitle="سهم تجمعی مسافران - درصد"
            />
          </Col>
        </Row>
      </TabPanel>
    </Box>
  );
}
