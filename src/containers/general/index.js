import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={2}>
        دآمد
      </TabPanel>
    </Box>
  );
}
