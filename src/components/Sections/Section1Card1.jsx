import { AiOutlineInfoCircle } from "react-icons/ai";

const Section1Card1 = ({ img, imgBgColor, data }) => {
  return (
    <div className="section-1__card">
      <div
        className="section-1__card__img-container"
        style={{ backgroundColor: imgBgColor }}
      >
        <img src={img} alt="" />
      </div>
      <div className="section-1__card__total">
        <span className="section-1__card__total__title">
          Total Vaccination Doses <AiOutlineInfoCircle size={16} />
        </span>
        <span className="section-1__card__total__num">
          {data[0]?.topBlock.vaccination.total_doses.toLocaleString("en-IN")}
        </span>
      </div>
      <div className="section-1__card__doses">
        <div className="section-1__card__doses__dose">
          <span className="section-1__card__doses__dose__title">Dose 1</span>
          <span className="section-1__card__doses__dose__num">
            {data[0]?.topBlock.vaccination.tot_dose_1.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="section-1__card__doses__dose">
          <span className="section-1__card__doses__dose__title">Dose 2</span>
          <span className="section-1__card__doses__dose__num">
            {data[0]?.topBlock.vaccination.tot_dose_2.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="section-1__card__doses__dose">
          <span className="section-1__card__doses__dose__title">
            Precaution Dose
          </span>
          <span className="section-1__card__doses__dose__num">
            {data[0]?.topBlock.vaccination.tot_pd.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section1Card1;
