import React from "react";
import "../../styles/components/Header/bottomHeader.scss";

import cowinLogo from "../../assets/new-logo.svg";

const BottomHeader = () => {
  return (
    <div className="bottom-header">
      <div className="container">
        <div className="bottom-header__content">
          <img src={cowinLogo} alt="" />
          <div className="bottom-header__content__right">
            <span className="bottom-header__content__right__verify">
              VERIFY CERTIFICATE
            </span>
            <span className="bottom-header__content__right__faq">FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
