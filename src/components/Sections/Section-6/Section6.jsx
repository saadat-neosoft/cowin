import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import "../../../styles/components/Sections/section-6.scss";
import Section6LineChart from "./Section6LIneChart";
import Section6StackedChart from "./Section6StackedChart";

const Section6 = () => {
  return (
    <div className="section-6">
      <div className="section-6__card">
        <div className="section-6__card__header">
          <span className="section-6__card__header__title">
            AEFI Reported <AiOutlineInfoCircle size={16} />
          </span>
          <span className="section-6__card__header__title-2">
            Overall : 0.007 %
          </span>
        </div>
        <div className="section-6__card__body">
          <Section6LineChart />
        </div>
      </div>
      <div className="section-6__card">
        <div className="section-6__card__header">
          <span className="section-6__card__header__title">
            Rural Vs Urban Trend
          </span>
        </div>
        <div className="section-6__card__body">
          <Section6StackedChart />
        </div>
      </div>
    </div>
  );
};

export default Section6;
