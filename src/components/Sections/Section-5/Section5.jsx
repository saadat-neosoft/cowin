import React, { useState } from "react";
// import "../../../styles/components/Sections/section-2.scss";
import "../../../styles/components/Sections/section-5.scss";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Section2LineChartTodayByAge from "../Section-2/Section2LineChartTodayByAge";
import Section2LineChartLast30DaysByAge from "../Section-2/Section2LineChartLast30DaysByAge";

import Section2LineChartAllByAge from "../Section-2/Section2LineChartAllByAge";
import Section5LineChartTodayByAge from "./Section5LIneChartTodayByAge";
import Section5LineChartLast30DaysByAge from "./Section5LineChartLast30DaysByAge";
import Section5LineChartAllByAge from "./Section5LineChartAllByAge";

const Section5 = () => {
  const [isBtnRightActive, setIsBtnRightActive] = useState("button1");

  const handleRightBtn = (buttonId) => {
    setIsBtnRightActive(buttonId);
  };
  return (
    <div className="section-5">
      <div className="section-5__header">
        <div className="section-5__title">
          Registration Trends <AiOutlineInfoCircle size={16} />
        </div>
        <div className="section-5__options">
          <div className="section-5__options__right">
            <div className="section-5__options__right__clubbed">
              <button
                onClick={() => handleRightBtn("button1")}
                className={`${
                  isBtnRightActive === "button1"
                    ? "section-5__options__btn--active"
                    : "section-5__options__btn"
                }`}
              >
                Today
              </button>
              <button
                onClick={() => handleRightBtn("button2")}
                className={`${
                  isBtnRightActive === "button2"
                    ? "section-5__options__btn--active"
                    : "section-5__options__btn"
                }`}
              >
                Last 30 Days
              </button>
            </div>
            <button
              onClick={() => handleRightBtn("button3")}
              className={`${
                isBtnRightActive === "button3"
                  ? "section-5__options__btn--active"
                  : "section-5__options__btn"
              }`}
            >
              All
            </button>
          </div>
        </div>
      </div>

      <div style={{ height: "336px", padding: "20px" }}>
        {isBtnRightActive === "button1" && <Section5LineChartTodayByAge />}
        {isBtnRightActive === "button2" && <Section5LineChartLast30DaysByAge />}
        {isBtnRightActive === "button3" && <Section5LineChartAllByAge />}
      </div>
    </div>
  );
};

export default Section5;
