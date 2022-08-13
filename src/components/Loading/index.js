import React from "react";
import ReactLoading from "react-loading";
import { Section, Article, Prop, list } from "./generic";
import "./index.css";

const Loading = () => (
  <div className="loadingBack">
    <Article key="spin" className="loadingmain">
      <ReactLoading type="spin" color="#01b182" />
    </Article>
  </div>
);

export default Loading;
