import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Programs from "../Programs/Programs";
import Testimonials from "../Testimonials/Testimonials";

function MainContent() {
  return (
    <>
      <main>
        <Programs />
        <About />
        <Gallery />
        <Testimonials />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

export default MainContent;
