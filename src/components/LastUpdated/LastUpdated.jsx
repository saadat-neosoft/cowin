import { AiOutlineClockCircle } from "react-icons/ai";
import "../../styles/components/LastUpdated/lastUpdated.scss";

const LastUpdated = () => {
  return (
    <div className="last-updated">
      <div className="container">
        <div className="last-updated__content">
          <div className="last-updated__content__left">
            <span className="last-updated__content__left__text">
              * The figure displayed in the dose counter are provisional and are
              subject to reconciliation.
            </span>
            <span className="last-updated__content__left__text">
              * The figures for 18 years old (birth year 2004) are included in
              18-44 age group.
            </span>
          </div>
          <div className="last-updated__content__right">
            <AiOutlineClockCircle size="20px" /> Last updated :{" "}
            <span>2023/7/5 10:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastUpdated;
