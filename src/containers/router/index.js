import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PieChart from "../../components/pieChart/index";
import LineChart from "../../components/lineChart/index";
import RodChart from "../../components/rodChart/index";
import ShowData from "../../components/showData/index";
import LineData from "../lineData/index";
import General from "../general/index";
import Login from "../login/index";
import Menu from "../menu";

import Loading from "../../components/Loading/index";
import Header from "../../components/header";
import styles from "./index.module.scss";

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
  const [userData, setuserData] = useState(null);
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState(null);

  const handleUserData = (data) => {
    setuserData(data);
    localStorage.setItem("token", JSON.stringify("Bearer" + " " + data.token));
  };

  const login = (
    <div className="loginPage">
      <Routes>
        <Route
          path="/login"
          element={
            <>
              {loading ? <Loading /> : null}
              <Login ongetData={(e) => handleUserData(e)} />
            </>
          }
        />
        <Route
          path="*"
          element={<Navigate to="/login" replace />} //this is a way to redirect
        />
      </Routes>
    </div>
  );
  const user = (
    <div className={styles["appWithMenu"]}>
      <Routes>
        <Route
          path="/line/data"
          element={
            <>
              <Header />
              <Menu onData={(e) => setdata(e)} selected="lines" />
              <LineData data={data} />
            </>
          }
        />
        <Route
          path="/line/ridership"
          element={
            <>
              <Header />
              <Menu onData={(e) => setdata(e)} selected="lines" />
              <LineData />
            </>
          }
        />
        <Route
          path="/line/income"
          element={
            <>
              <Header />
              <Menu onData={(e) => setdata(e)} selected="lines" />
              <LineData />
            </>
          }
        />
        <Route
          path="/general/data"
          element={
            <>
              <Header />
              <Menu onData={(e) => setdata(e)} selected="general" />
              <General />
            </>
          }
        />
        <Route
          path="/general/ridership"
          element={
            <>
              <Header />
              <Menu onData={(e) => setdata(e)} selected="general" />
              <General />
            </>
          }
        />
        <Route
          path="/general/fleet"
          element={
            <>
              <Header />
              <Menu onData={(e) => setdata(e)} selected="general" />
              <General />
            </>
          }
        />
        <Route
          path="/general/income"
          element={
            <>
              <Header />
              <Menu onData={(e) => setdata(e)} selected="general" />
              <General />
            </>
          }
        />
        <Route path="/PieChart" element={<PieChart data={data} />} />
        <Route
          path="/LineChart"
          element={
            <LineChart data={data} title="نمودار خطی" yTitle="جهت عمودی" />
          }
        />
        <Route
          path="/RodChart"
          element={<RodChart data={data} title="نمودار خطی" />}
        />
        <Route
          path="/ShowData"
          element={
            <ShowData title={"عنوان"} value={"23423423"} unit="میلیون ریال" />
          }
        />
        <Route
          path="*"
          element={<Navigate to="/line/data" replace />} //this is a way to redirect
        />
      </Routes>
    </div>
  );

  return userData === null ? login : user;
}

export default Router;
