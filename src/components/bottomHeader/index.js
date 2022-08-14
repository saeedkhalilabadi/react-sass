import React from "react";
import styles from "./style.module.scss";
export default function BottomHeader() {
  return (
    <>
      <div className={styles["bottom-header"]}>
        <img src="pic/TehranUniversity.png" alt="tehran" />
        <p>توسعه داده شده توسط پژوهشکده رشد هوشمند دانشگاه تهران ©</p>
      </div>
    </>
  );
}
