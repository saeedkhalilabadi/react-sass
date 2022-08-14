import React, { useState } from "react";
import NumberFormat from "react-number-format";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

//import { Calendar } from "react-modern-calendar-datepicker";
import { Button, Form } from "react-bootstrap";
import styles from "./index.module.scss";

export default function App({ onSelect, onClose, thisDate }) {
  const [date, setdate] = useState(null);
  const [open, setopen] = useState(false);

  console.log(date);

  const calendar = (
    <div className={styles["back"]}>
      <div className={styles["main"]}>
        <div className={styles["header"]}>
          {date == null
            ? "انتخاب کنید"
            : date.year + "/" + date.month + "/" + date.day}
        </div>

        <Calendar
          value={date}
          onChange={(e) => setdate(e)}
          shouldHighlightWeekends
          locale="fa" // add this
        />
        <div className={styles["footer"]}>
          <Button
            variant="light"
            className={styles["button"]}
            onClick={() => {
              onSelect(date);
              setopen(false);
            }}
          >
            تایید
          </Button>
          <Button
            variant="light"
            className={styles["button"]}
            onClick={() => {
              setopen(false);
            }}
          >
            انصراف
          </Button>
        </div>
      </div>
    </div>
  );

  const input = (
    <Form.Control
      className={styles["calendar"]}
      onFocus={() => setopen(true)}
      value={
        date == null
          ? "انتخاب کنید"
          : date.year + "/" + date.month + "/" + date.day
      }
      type="text"
      id="date"
    />
  );

  return (
    <>
      {open ? calendar : null}
      {input}
    </>
  );
}
