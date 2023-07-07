import React from "react";
import QuickLinks from "./QuickLinks";
import "../../styles/components/Footer/topFooter.scss";

const TopFooter = () => {
  const vaccinationServices = [
    "Register Members",
    "Search Vaccination Centers",
    "Book Vaccination Slots",
    "Manage Appointment",
    "Download Certificate",
  ];

  const platforms = [
    "CoWIN International",
    "Vaccinator",
    "Department Login",
    "Verify Certificates",
    "Vaccination Statistics",
  ];

  const resources = [
    "Dos and Don'ts",
    "Overview",
    "API Guidelines",
    "Open APIs",
    "Grievance Guidelines",
  ];

  const support = ["Frequently Asked Questions", "Certificate Corrections"];
  const contactUs = [
    "Helpline: +91-11-23978046 (Toll Free - 1075 )",
    "Technical Helpline: 0120-4783222",
  ];

  return (
    <div className="top-footer">
      <div className="container">
        <div className="top-footer__content">
          <div className="top-footer__content__left">
            <QuickLinks
              title="Vaccination Services"
              items={vaccinationServices}
            />
            <QuickLinks title="Platforms" items={platforms} />
            <QuickLinks title="Resources" items={resources} />
          </div>
          <div className="top-footer__content__right">
            <div className="top-footer__content__right__top">
              <QuickLinks title="support" items={support} />
              <QuickLinks title="contact us" items={contactUs} />
            </div>
            <div className="top-footer__content__right__bottom">
              <div className="top-footer__content__right__bottom__container">
                <span className="top-footer__content__right__bottom__title">
                  CHILD
                </span>
                <span className="top-footer__content__right__bottom__num">
                  1098
                </span>
              </div>
              <div className="top-footer__content__right__bottom__container">
                <span className="top-footer__content__right__bottom__title">
                  MENTAL HEALTH
                </span>
                <span className="top-footer__content__right__bottom__num">
                  08046110007
                </span>
              </div>
              <div className="top-footer__content__right__bottom__container">
                <span className="top-footer__content__right__bottom__title">
                  SENIOR CITIZENS
                </span>
                <span className="top-footer__content__right__bottom__num">
                  14567
                </span>
              </div>
              <div className="top-footer__content__right__bottom__container">
                <span className="top-footer__content__right__bottom__title">
                  NCW
                </span>
                <span className="top-footer__content__right__bottom__num">
                  7827170170
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
