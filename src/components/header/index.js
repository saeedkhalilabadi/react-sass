import React from "react";
import styles from "./style.module.scss";
import { IoMdLogOut } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
export default function Header() {
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header-content"]}>
          <img src={require("../../pic/logo2.png")} alt="logo" />
          <div className={styles["header-title"]}>
            شرکت واحد اتوبوسرانی تهران
          </div>
          <div className={styles["spacer"]}></div>
          <div className={styles["exit"]}>
            خروج
            <IoMdLogOut className={styles["iconExit"]} />
          </div>
          <div className={styles["home"]}>
            <IoMdHome className={styles["iconHome"]} />
          </div>
        </div>
      </header>
    </>
  );
}
