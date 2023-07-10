import { AiOutlineInfoCircle } from "react-icons/ai";

const Section1Card = ({
  img,
  imgBgColor,
  data,
  title,
  cardStats,
  cardTotal,
}) => {
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
          {title} <AiOutlineInfoCircle size={16} />
        </span>
        <span className="section-1__card__total__num">{cardTotal}</span>
      </div>
      <div className="section-1__card__doses">
        {cardStats &&
          cardStats.map((item, index) => (
            <div key={index} className="section-1__card__doses__dose">
              <span className="section-1__card__doses__dose__title">
                {item.title}
              </span>
              <span className="section-1__card__doses__dose__num">
                {item.stat}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Section1Card;
