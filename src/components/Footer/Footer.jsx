import React from "react";
import "../../styles/components/Footer/footer.scss";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <div className="footer">
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Footer;
