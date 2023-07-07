import "../../../styles/components/Sections/section-3.scss";
import Section3DonutChart from "./Section3DonutChart";
import Section3PieChart from "./Section3PieChart";
import Section3StackedBarChart from "./Section3StackedBarChart";

const Section3 = () => {
  return (
    <div className="section-3">
      <div className="section-3__card">
        <div className="section-3__card__title">Vaccination By Gender</div>
        <div className="section-3__card__body">
          <Section3PieChart />
        </div>
      </div>
      <div className="section-3__card">
        <div className="section-3__card__title">Vaccination By Type</div>
        <div className="section-3__card__body">
          <Section3DonutChart />
        </div>
      </div>
      <div className="section-3__card">
        <div className="section-3__card__title">Vaccination By Age</div>
        <div className="section-3__card__body">
          <Section3StackedBarChart />
        </div>
      </div>
    </div>
  );
};

export default Section3;
