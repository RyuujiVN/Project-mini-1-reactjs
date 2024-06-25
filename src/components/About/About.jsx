import AboutVideo from "../../assets/about.png";
import PlayVideo from "../../assets/play-icon.png";
import Title from "../Title/Title";
import "./About.scss";

function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__body">
            {/* About Left */}
            <div className="about__video">
              <img
                src={AboutVideo}
                alt="About video"
                className="about__image"
              />

              <div className="about__icon">
                <img src={PlayVideo} alt="About play video" />
              </div>
            </div>
            {/* About Right */}
            <div className="about__content">
              <Title
                subTitle="ABOUT UNIVERSITY"
                title="Nurturing Tomorrow's Leaders Today"
              />

              <p>
                Embark on a transformative educational journey with our
                university's comprehensive education programs. Our cutting-edge
                curriculum is designed to empower students with the knowledge,
                skills, and experiences needed to excel in the dynamic field of
                education.
              </p>

              <p>
                With a focus on innovation, hands-on learning, and personalized
                mentorship, our programs prepare aspiring educators to make a
                meaningful impact in classrooms, schools, and communities.
              </p>

              <p>
                Whether you aspire to become a teacher, administrator,
                counselor, or educational leader, our diverse range of programs
                offers the perfect pathway to achieve your goals and unlock your
                full potential in shaping the future of education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
