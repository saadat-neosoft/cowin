import React, { useState } from "react";
import "../../../styles/components/Sections/section-2.scss";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Section2LineChart from "./Section2LineChart";
import Section2LineChartLast30Days from "./Section2LineChartLast30Days";
import Section2LineChartAll from "./Section2LineChartAll";
import Section2LineChartTodayByAge from "./Section2LineChartTodayByAge";
import Section2LineChartLast30DaysByAge from "./Section2LineChartLast30DaysByAge";
import Section2LineChartAllByAge from "./Section2LineChartAllByAge";
const Section2 = () => {
  const [isBtnLeftActive, setIsBtnLeftActive] = useState("button1");
  const [isBtnRightActive, setIsBtnRightActive] = useState("button3");

  const handleLeftBtn = (buttonId) => {
    setIsBtnLeftActive(buttonId);
  };
  const handleRightBtn = (buttonId) => {
    setIsBtnRightActive(buttonId);
  };
  return (
    <div className="section-2">
      <div className="section-2__title">
        Vaccination Trends <AiOutlineInfoCircle size={16} />
      </div>
      <div className="section-2__options">
        <div className="section-2__options__left">
          <button
            onClick={() => handleLeftBtn("button1")}
            className={`${
              isBtnLeftActive === "button1"
                ? "section-2__options__btn--active"
                : "section-2__options__btn"
            }`}
          >
            By Doses
          </button>
          <button
            onClick={() => handleLeftBtn("button2")}
            className={`${
              isBtnLeftActive === "button2"
                ? "section-2__options__btn--active"
                : "section-2__options__btn"
            }`}
          >
            By Age
          </button>
        </div>
        <div className="section-2__options__right">
          <div className="section-2__options__right__clubbed">
            <button
              onClick={() => handleRightBtn("button3")}
              className={`${
                isBtnRightActive === "button3"
                  ? "section-2__options__btn--active"
                  : "section-2__options__btn"
              }`}
            >
              Today
            </button>
            <button
              onClick={() => handleRightBtn("button4")}
              className={`${
                isBtnRightActive === "button4"
                  ? "section-2__options__btn--active"
                  : "section-2__options__btn"
              }`}
            >
              Last 30 Days
            </button>
          </div>
          <button
            onClick={() => handleRightBtn("button5")}
            className={`${
              isBtnRightActive === "button5"
                ? "section-2__options__btn--active"
                : "section-2__options__btn"
            }`}
          >
            All
          </button>
        </div>
      </div>
      <div style={{ height: "336px", padding: "20px" }}>
        {isBtnLeftActive === "button1" && isBtnRightActive === "button3" && (
          <Section2LineChart />
        )}
        {isBtnLeftActive === "button1" && isBtnRightActive === "button4" && (
          <Section2LineChartLast30Days />
        )}
        {isBtnLeftActive === "button1" && isBtnRightActive === "button5" && (
          <Section2LineChartAll />
        )}
        {isBtnLeftActive === "button2" && isBtnRightActive === "button3" && (
          <Section2LineChartTodayByAge />
        )}
        {isBtnLeftActive === "button2" && isBtnRightActive === "button4" && (
          <Section2LineChartLast30DaysByAge />
        )}
        {isBtnLeftActive === "button2" && isBtnRightActive === "button5" && (
          <Section2LineChartAllByAge />
        )}
      </div>
    </div>
  );
};

export default Section2;
