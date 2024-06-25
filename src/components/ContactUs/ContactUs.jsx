import Title from "../Title/Title";
import LocationIcon from "../../assets/location-icon.png";
import MailIcon from "../../assets/mail-icon.png";
import PhoneIcon from "../../assets/phone-icon.png";
import ArrowIcon from "../../assets/white-arrow.png";
import MsgIcon from "../../assets/msg-icon.png";
import "./ContactUs.scss";
import { useState } from "react";

function ContactUs() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "548229e4-dc15-495c-9269-d9fd12e85985");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact__body">
            {/* Contact Top */}
            <Title subTitle="Contact Us" title="Get In Touch" />

            {/* Contact Bottom */}
            <div className="contact__content">
              {/* Contact Left */}
              <div className="contact__content--left">
                <h3 className="contact__title">
                  Send us a message
                  <img src={MsgIcon} alt="Msg Icon" />
                </h3>
                <p className="contact__descr">
                  Feel free to reach out through contact form or find our
                  contact information below. Your feedback, questions, and
                  suggestions are important to us as we strive to provide
                  exceptional service to our university community.
                </p>
                <ul>
                  <li>
                    <img src={MailIcon} alt="Mail Icon" />
                    Contact@GreatStack.dev
                  </li>
                  <li>
                    <img src={PhoneIcon} alt="Phone Icon" />
                    +1123-456-7890
                  </li>
                  <li>
                    <img src={LocationIcon} alt="Location Icon" />
                    77 Massachusetts Ave, Cambridge
                    <br />
                    MA 02139, United States
                  </li>
                </ul>
              </div>

              {/* Contact Right */}
              <div className="contact__content--right">
                <form className="contact__form" onSubmit={onSubmit}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name..."
                  />
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your phone number..."
                  />
                  <label htmlFor="messages">Write your messages here</label>
                  <textarea
                    rows={6}
                    id="messages"
                    placeholder="Enter your message"
                    name="messages"
                  />
                  <button className="btn contact__btn">
                    Submit now
                    <img src={ArrowIcon} alt="ArrowIcon" />
                  </button>
                </form>
                <span>{result}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
