import React, { useEffect, useState } from "react";

import "../../../styles/components/Sections/section-4.scss";

import indiaMap from "../../../assets/india map.png";
import Section4DonutChart from "./Section4DonutChart";
import SampleMap from "../../Maps/SampleMap";
import { LevenshteinDistance } from "natural/lib/natural/distance/levenshtein_distance";

const Section4 = () => {
  const [states, setStates] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const [nameOfState, setNameOfState] = useState();
  const [dose1, setDose1] = useState();
  const [dose2, setDose2] = useState();
  const [pd, setPd] = useState();

  const handleHover = (stateName, states) => {
    // const state = states.filter(
    //   (item) => item.title.toLowerCase() === stateName.toLowerCase()
    // );

    const similarityThreshold = 0.8; // Adjust the threshold as needed

    const state = states.filter((item) => {
      const string1 = item.title.toLowerCase();
      const string2 = stateName.toLowerCase();
      const distance = LevenshteinDistance(string1, string2);
      const similarity =
        1 - distance / Math.max(string1.length, string2.length);
      return similarity >= similarityThreshold;
    });
    // console.log(state);

    if (state.length > 0) {
      setNameOfState(state[0].title);
      setDose1(state[0].partial_vaccinated.toLocaleString("en-IN"));
      setDose2(state[0].totally_vaccinated.toLocaleString("en-IN"));
      setPd(state[0].precaution_dose.toLocaleString("en-IN"));
    } else {
      setNameOfState("NA");
      setDose1("NA");
      setDose2("NA");
      setPd("NA");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // Adding +1 to account for zero-based months
        const day = String(today.getDate()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}`;
        // console.log(formattedDate);
        const response = await fetch(
          `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=${formattedDate}`
        );
        const jsonData = await response.json();
        // console.log(jsonData.getBeneficiariesGroupBy.map((item) => item));
        setStates(jsonData.getBeneficiariesGroupBy);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="section-4">
      <span className="section-4__title">Vaccination Coverage by State/UT</span>
      <div className="section-4__charts">
        <div
          className="section-4__charts__left"
          style={{ position: "relative" }}
        >
          {/* <img src={indiaMap} alt="" />
           */}
          <SampleMap
            setIsVisible={setIsVisible}
            setTooltipPosition={setTooltipPosition}
            handleHover={handleHover}
            states={states}
          />
          <div
            className="section-4__charts__left__tooltip"
            style={{
              visibility: isVisible ? "visible" : "hidden",
              position: "absolute",
              left: tooltipPosition.x,
              top: tooltipPosition.y - 60,
            }}
          >
            <div className="section-4__charts__left__tooltip__title-1">
              {nameOfState}
            </div>

            <div className="section-4__charts__left__tooltip__title-2">
              Dose One
            </div>
            <div className="section-4__charts__left__tooltip__title-1">
              {dose1}
            </div>
            <div className="section-4__charts__left__tooltip__title-2">
              Dose Two
            </div>
            <div className="section-4__charts__left__tooltip__title-1">
              {dose2}
            </div>
            <div className="section-4__charts__left__tooltip__title-2">
              Precaution Dose
            </div>
            <div className="section-4__charts__left__tooltip__title-1">
              {pd}
            </div>
          </div>
        </div>
        <div className="section-4__charts__middle"></div>
        <div className="section-4__charts__right">
          {states &&
            states.map((item, index) => (
              <div key={index} className="section-4__charts__right__card">
                {/* {console.log(states.filter((item) => item))} */}
                <div className="section-4__charts__right__card__chart">
                  <Section4DonutChart
                    dose1={item.partial_vaccinated}
                    dose2={item.totally_vaccinated}
                    pd={item.precaution_dose}
                  />
                </div>
                <div className="section-4__charts__right__card__content">
                  <div className="section-4__charts__right__card__content__title">
                    {item.title}
                  </div>
                  <div className="section-4__charts__right__card__content__details">
                    <div className="section-4__charts__right__card__content__details__item">
                      <span className="section-4__charts__right__card__content__details__item__title">
                        Today
                      </span>
                      <span className="section-4__charts__right__card__content__details__item__num">
                        {item.today}
                      </span>
                    </div>
                    <div className="section-4__charts__right__card__content__details__item">
                      <span className="section-4__charts__right__card__content__details__item__title">
                        Total
                      </span>
                      <span className="section-4__charts__right__card__content__details__item__num">
                        {item.total}
                      </span>
                    </div>
                    <div className="section-4__charts__right__card__content__details__item">
                      <span className="section-4__charts__right__card__content__details__item__title">
                        Dose 1
                      </span>
                      <span
                        className="section-4__charts__right__card__content__details__item__num"
                        style={{ color: "#ff9800" }}
                      >
                        {item.partial_vaccinated}
                      </span>
                    </div>
                    <div className="section-4__charts__right__card__content__details__item">
                      <span className="section-4__charts__right__card__content__details__item__title">
                        Dose 2
                      </span>
                      <span
                        className="section-4__charts__right__card__content__details__item__num"
                        style={{ color: "#21cc98" }}
                      >
                        {item.totally_vaccinated}
                      </span>
                    </div>
                    <div className="section-4__charts__right__card__content__details__item">
                      <span className="section-4__charts__right__card__content__details__item__title">
                        Precaution Dose
                      </span>
                      <span
                        className="section-4__charts__right__card__content__details__item__num"
                        style={{ color: "#12ad06" }}
                      >
                        {item.precaution_dose}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
