import React from "react";

import "../../styles/components/Footer/quicklinks.scss";

const QuickLinks = ({ title, items }) => {
  return (
    <div className="quicklinks">
      <span className="quicklinks__title">{title}</span>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="quicklinks__items">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
