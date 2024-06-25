import Title from "../Title/Title";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import gallery_icon from "../../assets/white-arrow.png";
import "./Gallery.scss";

function Gallery() {
  return (
    <>
      <section className="gallery">
        <div className="container">
          <div className="gallery__body">
            {/* Gallery Top */}
            <Title subTitle="Gallery" title="Campus Photos" />

            {/* Gallery Bottom */}
            <div className="gallery__list">
              <figure className="gallery__item">
                <img src={gallery_1} alt="Gallery Image" />
              </figure>

              <figure className="gallery__item">
                <img src={gallery_2} alt="Gallery Image" />
              </figure>

              <figure className="gallery__item">
                <img src={gallery_3} alt="Gallery Image" />
              </figure>

              <figure className="gallery__item">
                <img src={gallery_4} alt="Gallery Image" />
              </figure>
            </div>

            <button className="btn gallery__btn">
              See more here
              <img src={gallery_icon} alt="Gallery icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
