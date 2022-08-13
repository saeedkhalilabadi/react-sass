import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import axios from "../../components/axios/base";
import styles from "./style.module.scss";
import './style.module.scss';
import MyAlert from "../../components/MyAlert/index";
import Loading from "../../components/Loading/index";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export default function Login({ ongetData }) {
  const [loading, setloading] = useState(false);
  const [alert, setalert] = useState(null);
  const [data, setdata] = useState({
    username: null,
    password: null,
    rememberMe: true,
  });

  async function getData(loginData) {
    console.log("login", loginData);
    setloading(true);
    await axios
      .post("/authenticate", loginData)
      .then((response) => {
        setloading(false);
        console.log(response);

        if (response.data.statusCode == "200") ongetData(response.data.detail);
        else {
          setalert(
            <MyAlert
              message="نام کاربری یا رمز عبور اشتباه است"
              severity="error"
              open1={() => setalert(null)}
            />
          );
        }
      })
      .catch((error) => {
        setloading(false);

        console.log(error);
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("==================data>", data);
  };

  return (
    <>
      {alert}
      {loading ? <Loading /> : null}
      <section className={styles["container"]}>
        <div className={styles["login-form-container"]}>
          <div className={styles["header-login-form"]}>
            <img src="pic/logo2.png" alt="logo Bus Company" />
            <p>داشبورد مدیریت سامانه‌های شرکت واحد اتوبوسرانی تهران</p>
          </div>
          <div className={styles["body-login-form"]}>
            <p className={styles["login-text"]}>ورود</p>
            <form action="#">
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <Box sx={{ paddingTop: 1, "& > :not(style)": { m: 1 } }}>
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <PersonIcon sx={{ color: "#fff", mr: 1, my: 0.5 }} />
                      <TextField
                        name="username"
                        onChange={handleChange}
                        id="input-with-sx"
                        label="نام کاربری"
                        variant="standard"
                        // color="secondary" //Todo after select color for border-bottom - white -
                        sx={{
                          direction: "rtl",
                          "& #input-with-sx-label": {
                            color: "hsla(0, 0%, 100%, 0.7)",
                            fontFamily: "IRANSans",
                            fontSize: 12,
                          },
                          "& #input-with-sx": {
                            color: "#fff",
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ paddingTop: 1, "& > :not(style)": { m: 1 } }}>
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <LockIcon sx={{ color: "#fff", mr: 1, my: 0.5 }} />
                      <TextField
                        name="password"
                        onChange={handleChange}
                        id="standard-password-input"
                        label="رمز عبور"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        sx={{
                          direction: "rtl",
                          "& #standard-password-input-label": {
                            color: "hsla(0, 0%, 100%, 0.7)",
                            fontFamily: "IRANSans",
                            fontSize: 12,
                          },
                          "& #standard-password-input": {
                            color: "#fff",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </ThemeProvider>
              </CacheProvider>
              <div className={styles["remember-me"]}>
                <FormGroup sx={{ paddingTop: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          "& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium": {
                            color: "white",
                            fontSize: 20,
                          },
                        }}
                      />
                    }
                    label="مرا به خاطر بسپار"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontFamily: "IRANSans",
                        fontSize: 12,
                        userSelect: "none",
                        color: "hsla(0, 0%, 100%, 0.7)",
                      },
                    }}
                  />
                </FormGroup>
              </div>
            </form>
          </div>
          <button className={styles["btn"]} onClick={() => getData(data)}>
            ورود
          </button>
        </div>
      </section>
    </>
  );
}

// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
