import { Gollery } from "../components/client/ClientsInfo";

const Gallery = () => {
  return (
    <section className="gallerys">
      {Gollery.map((x) => (
        <div className="gallery">
          <img src={x.img} alt="" />
        </div>
      ))}
    </section>
  );
};
export default Gallery;
