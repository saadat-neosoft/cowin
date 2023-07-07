import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Section1Card3 = ({ img, imgBgColor, data }) => {
  return (
    <div className="section-1__card">
      <div
        className="section-1__card__img-container"
        style={{ backgroundColor: imgBgColor }}
      >
        <img src={img} alt="" />
      </div>
      <div className="section-1__card__total">
        <span className="section-1__card__total__title">
          Total Registrations <AiOutlineInfoCircle size={16} />
        </span>
        <span className="section-1__card__total__num">
          {" "}
          {data[0]?.topBlock.registration.total.toLocaleString("en-IN")}
        </span>
      </div>
      <div className="section-1__card__doses">
        <div className="section-1__card__doses__dose">
          <span className="section-1__card__doses__dose__title">Age 12-14</span>
          <span className="section-1__card__doses__dose__num">
            {data[0]?.topBlock.registration.cit_12_14.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="section-1__card__doses__dose">
          <span className="section-1__card__doses__dose__title">Age 15-17</span>
          <span className="section-1__card__doses__dose__num">
            {data[0]?.topBlock.registration.cit_15_17.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="section-1__card__doses__dose">
          <span className="section-1__card__doses__dose__title">Age 18-44</span>
          <span className="section-1__card__doses__dose__num">
            {data[0]?.topBlock.registration.cit_18_45.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="section-1__card__doses__dose">
          <span className="section-1__card__doses__dose__title">Age 45+</span>
          <span className="section-1__card__doses__dose__num">
            {data[0]?.topBlock.registration.cit_45_above.toLocaleString(
              "en-IN"
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section1Card3;
