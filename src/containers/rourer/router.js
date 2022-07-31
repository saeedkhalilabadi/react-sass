import React, { useState, useEffect } from "react";
import PieChart from "../../components/pieChart/pieChart";
import LineChart from "../../components/lineChart/index";
import RodChart from "../../components/rodChart/index";

const data = [
  {
    type: "تست",
    value: 27,
  },
  {
    type: "تست2سیبسیبسبی",
    value: 25,
  },
  {
    type: "تسسیبسیبسیبت3",
    value: 18,
  },
  {
    type: "تسسیبسیبت4",
    value: 15,
  },
  {
    type: "تیسبسیبسیبست5",
    value: 10,
  },
  {
    type: "تسسیبسیبسیبت6",
    value: 5,
  },
];

function Router() {
  return (
    <div className="App">
      <PieChart data={data} />
      <LineChart
        data={data}
        title="نمودار خطی"
        xTitle="جهت افقی"
        yTitle="جهت عمودی"
      />
      <RodChart data={data} title="نمودار خطی" />
    </div>
  );
}

export default Router;
