import React from "react";
import Section1 from "./Section1";

import "../../styles/components/Sections/sections.scss";
import Section2 from "./Section-2/Section2";
import Section3 from "./Section-3/Section3";

const Sections = () => {
  return (
    <div className="sections">
      <div className="container">
        <div className="sections__content">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </div>
    </div>
  );
};

export default Sections;
