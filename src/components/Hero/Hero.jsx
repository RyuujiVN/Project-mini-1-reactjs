import "./Hero.scss";
import ArrowIcon from "../../assets/dark-arrow.png";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              We Ensure better education for a better world
            </h1>

            <p className="hero__descr">
              Our cutting-edge curriculum is designed to empower students with
              the knowledge, skills, and experiences needed to excel in the
              dynamic field of education
            </p>
            <button className="btn hero__btn">
              Explore more
              <img className="hero__icon" src={ArrowIcon} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
