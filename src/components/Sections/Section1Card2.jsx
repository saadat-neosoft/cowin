import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Section1Card2 = ({ img, imgBgColor, data }) => {
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
          Sites Conducting Vaccination <AiOutlineInfoCircle size={16} />
        </span>
        <span className="section-1__card__total__num">
          {" "}
          {data[0]?.topBlock.sites.total.toLocaleString("en-IN")}
        </span>
      </div>
      <div className="section-1__card__doses">
        <div className="section-1__card__doses__dose">
          <span className="section-1__card__doses__dose__title">
            Government
          </span>
          <span className="section-1__card__doses__dose__num-2">
            {data[0]?.topBlock.sites.govt.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="section-1__card__doses__dose">
          <span className="section-1__card__doses__dose__title">Private</span>
          <span className="section-1__card__doses__dose__num-2">
            {data[0]?.topBlock.sites.pvt.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section1Card2;
