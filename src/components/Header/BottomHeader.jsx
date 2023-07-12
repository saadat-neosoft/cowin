import React, { useEffect, useState } from "react";
import "../../styles/components/Header/bottomHeader.scss";
import cowinLogo from "../../assets/new-logo.svg";
import { BsThreeDotsVertical } from "react-icons/bs";

const BottomHeader = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
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
    <div className="bottom-header">
      <div className="container">
        <div className="bottom-header__content">
          <img src={cowinLogo} alt="" />
          <div className="bottom-header__content__right">
            {windowWidth < 900 ? (
              <button
                className="bottom-header__content__right__btn"
                onClick={() => setIsHamburgerActive(!isHamburgerActive)}
              >
                <BsThreeDotsVertical color="#fff" size={25} />
                {isHamburgerActive && (
                  <div className="bottom-header__content__right__btn__menu">
                    <span className="bottom-header__content__right__btn__menu__verify">
                      Verify Certificate
                    </span>
                    <span className="bottom-header__content__right__btn__menu__faq">
                      FAQ
                    </span>
                  </div>
                )}
              </button>
            ) : (
              <>
                <span className="bottom-header__content__right__verify">
                  VERIFY CERTIFICATE
                </span>
                <span className="bottom-header__content__right__faq">FAQ</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
