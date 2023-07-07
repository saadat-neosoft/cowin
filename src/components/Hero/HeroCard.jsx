import "../../styles/components/Hero/hero.scss";
import HeroLineChart from "./HeroLineChart";

const HeroCard = ({ img, title, num, bg, border, fill }) => {
  return (
    <div className="hero__content__card" style={{ backgroundColor: bg }}>
      <div className="hero__content__card__details">
        <div className="hero__content__card__details__img-container">
          <img src={img} alt="" />
        </div>
        <div className="hero__content__card__details__info">
          <div className="hero__content__card__details__info__top">
            <span className="hero__content__card__details__info__title">
              {title}
            </span>
            <div className="hero__content__card__details__day">TODAY</div>
          </div>
          <span className="hero__content__card__details__info__num">{num}</span>
        </div>
      </div>
      <div style={{ height: "40px" }}>
        <HeroLineChart border={border} fill={fill}/>
      </div>
    </div>
  );
};

export default HeroCard;
