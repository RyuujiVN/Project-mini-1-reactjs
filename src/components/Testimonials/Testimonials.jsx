import Title from "../Title/Title";
import "./Testimonials.scss";
import SlideImage_1 from "../../assets/user-1.png";
import SlideImage_2 from "../../assets/user-2.png";
import SlideImage_3 from "../../assets/user-3.png";
import SlideImage_4 from "../../assets/user-4.png";
import ArrowIconNext from "../../assets/next-icon.png";
import ArrowIconBack from "../../assets/back-icon.png";
import { useRef } from "react";

function Testimonials() {
  const ulRef = useRef();
  const markRef = useRef();
  let x = 0;
  let xMark = 0;

  const handleForward = () => {
    if (x > -50) {
      x -= 25;
      xMark += 33.33;
    }

    ulRef.current.style.transform = `translateX(${x}%)`;
    markRef.current.style.left = `${xMark}%`;
    console.log(ulRef.current);
  };

  const handleBackward = () => {
    if (x < 0) {
      x += 25;
      xMark -= 33.33;
    }

    ulRef.current.style.transform = `translateX(${x}%)`;
    markRef.current.style.left = `${xMark}%`;
  };

  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="testimonials__body">
            {/* Testimonials Top */}
            <Title subTitle="Testimonials" title="What Student Says" />
            <img
              src={ArrowIconBack}
              alt="Back icon"
              className="testimonials__icon testimonials__icon--back"
              onClick={handleBackward}
            />

            <img
              src={ArrowIconNext}
              alt="Next icon"
              className="testimonials__icon testimonials__icon--next"
              onClick={handleForward}
            />

            <div className="progress">
              <div className="progress__mark" ref={markRef}></div>
            </div>

            {/* Testimonials Bottom */}
            <div className="testimonials__slider">
              <ul ref={ulRef}>
                <li>
                  <div className="slide">
                    <div className="slide__info">
                      <div className="slide__image">
                        <img src={SlideImage_1} alt="Slide image" />
                        <div>
                          <h3>Emily Williams</h3>
                          <span>Edusity, USA</span>
                        </div>
                      </div>

                      <p>
                        Choosing to pursue my degree at Edusity was one of the
                        best decisions I've ever made. The supportive community.
                        state-of-the-art facilities, and commitment to academic
                        excellence have truly exceeded my expectations
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="slide">
                    <div className="slide__info">
                      <div className="slide__image">
                        <img src={SlideImage_2} alt="Slide image" />
                        <div>
                          <h3>William Jackson</h3>
                          <span>Edusity, USA</span>
                        </div>
                      </div>

                      <p>
                        Choosing to pursue my degree at Edusity was one of the
                        best decisions I've ever made. The supportive community.
                        state-of-the-art facilities, and commitment to academic
                        excellence have truly exceeded my expectations
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="slide">
                    <div className="slide__info">
                      <div className="slide__image">
                        <img src={SlideImage_3} alt="Slide image" />
                        <div>
                          <h3>William Jackson</h3>
                          <span>Edusity, USA</span>
                        </div>
                      </div>

                      <p>
                        Choosing to pursue my degree at Edusity was one of the
                        best decisions I've ever made. The supportive community.
                        state-of-the-art facilities, and commitment to academic
                        excellence have truly exceeded my expectations
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="slide">
                    <div className="slide__info">
                      <div className="slide__image">
                        <img src={SlideImage_4} alt="Slide image" />
                        <div>
                          <h3>William Jackson</h3>
                          <span>Edusity, USA</span>
                        </div>
                      </div>

                      <p>
                        Choosing to pursue my degree at Edusity was one of the
                        best decisions I've ever made. The supportive community.
                        state-of-the-art facilities, and commitment to academic
                        excellence have truly exceeded my expectations
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
