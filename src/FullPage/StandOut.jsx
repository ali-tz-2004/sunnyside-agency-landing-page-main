import { Link } from "react-router-dom";
import * as img from "../images/export";

const StandOut = () => {
  return (
    <section className="full-page-trans-stand full-page-stand">
      <div className="color-page-trans-stand red-page">
        <img src={img.image_stand_out} alt="img-standOut" />
      </div>
      <div className="white-page-trans-stand white-page-stand">
        <div className="white-pg-stand white-pg">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <div className="obj-link-trans-stand obj-link-stand">
            <Link>LORM MORE</Link>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandOut;
