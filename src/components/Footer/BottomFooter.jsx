import "../../styles/components/Footer/bottomFooter.scss";
import nationalHealth from "../../assets/national-health-authority.jpg";
import undp from "../../assets/undp-logo-vertical.svg";
import { useEffect, useState } from "react";

const BottomFooter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="bottom-footer">
      <div className="container">
        <div className="bottom-footer__content">
          {windowWidth > 770 ? (
            <>
              <div className="bottom-footer__content__left">
                <span className="bottom-footer__content__left__text">
                  Copyright © 2021 CoWIN. All Rights Reserved
                </span>
              </div>
              <div className="bottom-footer__content__center">
                <img
                  className="bottom-footer__content__center__img1"
                  src={nationalHealth}
                  alt=""
                />
                <img
                  className="bottom-footer__content__center__img2"
                  src={undp}
                  alt=""
                />
              </div>
              <div className="bottom-footer__content__right">
                <span>Terms of Service</span>
                <span> | </span>
                <span>Privacy Policy</span>
              </div>
            </>
          ) : (
            <div className="bottom-footer__content__responsive">
              <div className="bottom-footer__content__center">
                <img
                  className="bottom-footer__content__center__img1"
                  src={nationalHealth}
                  alt=""
                />
                <img
                  className="bottom-footer__content__center__img2"
                  src={undp}
                  alt=""
                />
              </div>

              <div className="bottom-footer__content__right">
                <span>Terms of Service</span>
                <span> | </span>
                <span>Privacy Policy</span>
              </div>
              <div className="bottom-footer__content__left">
                <span className="bottom-footer__content__left__text">
                  Copyright © 2021 CoWIN. All Rights Reserved
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
