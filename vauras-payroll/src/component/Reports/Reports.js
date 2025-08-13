import React from "react";
import "./Reports.css";
import left_img from "../../image/reports.png";
import right_img from "../../image/reportsright.png";
export default function FeaturesPage() {
  return (
    <>
    <div className="reports_head">
      <h2>REPORTS</h2>
    </div>
    <div className="reports_img">
        <img src={left_img}/>
        <img className="right_img"  src={right_img}/>
    </div>
    </>
  );
}
