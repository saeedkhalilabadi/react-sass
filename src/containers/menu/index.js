import React, { useState } from "react";
import { Link } from "react-router-dom";
import GeneralMenu from "../../components/generalMenu";
import LineMenu from "../../components/lineMenu";
import styles from "./index.module.scss";

export default function Menu({ selected, onData }) {
  const [selectedMenu, setselectedMenu] = useState(selected);

  const menu = (
    <div className={styles["mainMenu"]}>
      <Link
        className={styles["link"]}
        to="/general/data"
        onClick={() => setselectedMenu("general")}
      >
        <div
          className={
            selectedMenu === "general"
              ? styles["selectedTitle"]
              : styles["title"]
          }
        >
          گزارش شبکه خطوط
        </div>
      </Link>
      <Link
        className={styles["link"]}
        to="/line/data"
        onClick={() => setselectedMenu("lines")}
      >
        <div
          className={
            selectedMenu === "lines" ? styles["selectedTitle"] : styles["title"]
          }
        >
          گزارش خط
        </div>
      </Link>

      <div className={styles["bodyMenu"]}>
        {selectedMenu === "lines" ? (
          <LineMenu
            onGetData={(e) => {
              onData(e);
            }}
          />
        ) : (
          <GeneralMenu />
        )}
      </div>
    </div>
  );

  return menu;
}
