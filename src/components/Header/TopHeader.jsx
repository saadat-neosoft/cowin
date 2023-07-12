import { useEffect, useState } from "react";
import emblem from "../../assets/emblem-gov.svg";
import "../../styles/components/Header/topHeader.scss";

import { AiFillCaretDown } from "react-icons/ai";

const TopHeader = () => {
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
    <div className="top-header">
      <div className="container">
        <div className="top-header__content">
          <div className="top-header__content__left">
            <img
              src={emblem}
              alt=""
              className="top-header__content__emblemImg"
            />

            <a
              className="top-header__content__title"
              href="https://www.mohfw.gov.in/"
            >
              Ministry of Health and Family Welfare
            </a>
          </div>
          <div className="top-header__content__right">
            {windowWidth > 768 && (
              <div className="top-header__content__right__font-btns">
                <button className="top-header__content__right__font-btns__btn">
                  A +
                </button>
                <button className="top-header__content__right__font-btns__btn--normal">
                  A
                </button>
                <button className="top-header__content__right__font-btns__btn">
                  A -
                </button>
              </div>
            )}

            <span className="top-header__content__right__lang-btn">
              ENGLISH
              <AiFillCaretDown size="8px" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
