import "../../styles/components/Hero/hero.scss";
import HeroCard from "./HeroCard";

import regToday from "../../assets/registrations-today-icon.svg";
import vacToday from "../../assets/vaccination-today-icon.svg";
import parVacToday from "../../assets/partially-vaccinated-today-icon.svg";
import fullyVacToday from "../../assets/fully-vaccinated-today-icon.svg";
import age12To14 from "../../assets/12-14-age-icon.svg";
import age15To17 from "../../assets/15-17-vaccination-icon.svg";
import age18To59 from "../../assets/18-59-precaution-dose-icon.svg";
import age60Plus from "../../assets/60plus-icon.svg";

const Hero = () => {
  const border1 = "#017171";
  const fill1 = "#01abab";

  const border2 = "#147ad6";
  //   const fill2 = "#288eea";
  const fill2 = "#4ea2ee";

  const border3 = "#ff9a31";
  //   const fill3 = "#ffa94f";
  const fill3 = "#feae5a";

  const border4 = "#2fb58d";
  //   const fill4 = "#40cda3";
  const fill4 = "#4bd0a8";

  const border5 = "#f3c92a";
  const fill5 = "#f6d65f";

  const border6 = "#b24cc2";
  const fill6 = "#bd66cb";

  const border7 = "#e14b4b";
  const fill7 = "#e56565";

  const border8 = "#34b752";
  const fill8 = "#48cb66";

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content">
          <HeroCard
            img={regToday}
            title="REGISTRATIONS
            "
            num={410}
            bg="#e2f5f5"
            border={border1}
            fill={fill1}
          />
          <HeroCard
            img={vacToday}
            title="
            VACCINATIONS"
            num={208}
            bg="#e1effb"
            border={border2}
            fill={fill2}
          />
          <HeroCard
            img={parVacToday}
            title="
            PARTIALLY VACCINATED"
            num={21}
            bg="#ffe8d1"
            border={border3}
            fill={fill3}
          />
          <HeroCard
            img={fullyVacToday}
            title="
            FULLY VACCINATED"
            num={9}
            bg="#dcfdf5"
            border={border4}
            fill={fill4}
          />
          <HeroCard
            img={age12To14}
            title="12-14 VACCINATIONS"
            num={0}
            bg="rgba(243,201,42,.15)"
            border={border5}
            fill={fill5}
          />
          <HeroCard
            img={age15To17}
            title="
            
15-17 VACCINATIONS"
            num={0}
            bg="#f3e1f3"
            border={border6}
            fill={fill6}
          />
          <HeroCard
            img={age18To59}
            title="
            18-59 PRECAUTION DOSES"
            num={181}
            bg="#fdebe3"
            border={border7}
            fill={fill7}
          />
          <HeroCard
            img={age60Plus}
            title="
            
60+ PRECAUTION DOSES"
            num={22}
            bg="#ceedd2"
            border={border8}
            fill={fill8}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
