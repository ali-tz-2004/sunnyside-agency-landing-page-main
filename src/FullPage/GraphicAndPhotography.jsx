import * as img from "../images/export";

const GraphicAndPhotography = () => {
  return (
    <section className="page-graphic-and-photography">
      <div
        className="page-graphic"
        style={{ backgroundImage: `url(${img.graphic_design})` }}
      >
        <div className="text-page-graphic">
          <h2>Graphic design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div
        className="page-photography"
        style={{ backgroundImage: `url(${img.photography})` }}
      >
        <div className="text-page-photography">
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};
export default GraphicAndPhotography;
