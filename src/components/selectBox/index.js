import React from "react";
import Select from "react-select";
import "./style.scss";
const options = [
  { value: "قاف", label: "قاف" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function SelectComponent({ value, onChange, options = [] }) {
  return (
    <>
      <div>
        <Select
          value={value}
          options={options}
          isClearable
          isRtl
          placeholder="انتخاب کنید"
          onChange={(e) => onChange(e)}

          // style={{
          //   "& .css-1s2u09g-control": {
          //     backgroundColor: "red",
          //   },
          // }}
        />
      </div>
    </>
  );
}
