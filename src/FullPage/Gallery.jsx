import * as img from "../images/export";

const Gallery = () => {
  return (
    <section className="gallerys">
      <div className="gallery">
        <img src={img.image_gallery_milkbottles} alt="" />
      </div>
      <div className="gallery">
        <img src={img.gallery_orange} alt="" />
      </div>
      <div className="gallery">
        <img src={img.gallery_cone} alt="" />
      </div>
      <div className="gallery">
        <img src={img.gallery_sugarcubes} alt="" />
      </div>
    </section>
  );
};
export default Gallery;
