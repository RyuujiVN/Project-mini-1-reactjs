import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import icon_1 from "../../assets/program-icon-1.png";
import icon_2 from "../../assets/program-icon-2.png";
import icon_3 from "../../assets/program-icon-3.png";
import Title from "../Title/Title";
import "./Programs.scss";

function Programs() {
  return (
    <>
      <section className="program">
        <div className="container">
          <div className="program__body">
            {/* Program Top */}
            <Title subTitle="Our Program" title="What We Offer" />

            {/* Program Bottom */}
            <div className="program__bottom">
              <div className="program__list">
                <div className="program__item">
                  <img src={program_1} alt="program image" />
                  <div className="program__caption">
                    <img src={icon_1} alt="program icon" />
                    <p>Masters Degree</p>
                  </div>
                </div>

                <div className="program__item">
                  <img src={program_2} alt="program image" />
                  <div className="program__caption">
                    <img src={icon_2} alt="program icon" />
                    <p>Granduation Degree</p>
                  </div>
                </div>

                <div className="program__item">
                  <img src={program_3} alt="program image" />
                  <div className="program__caption">
                    <img src={icon_3} alt="program icon" />
                    <p>Granduation Degree</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;
