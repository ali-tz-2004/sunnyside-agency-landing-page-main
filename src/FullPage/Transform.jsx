import { Link } from "react-router-dom";
import * as img from "../images/export";

const Transform = () => {
  return (
    <div className="full-page-trans-stand full-page-trans">
      <div className="white-page-trans-stand white-page-trans">
        <div className="white-pg-trans white-pg">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <div className="obj-link-trans-stand obj-link-trans">
            <Link>LORM MORE</Link>
            <div></div>
          </div>
        </div>
      </div>
      <div className="color-page-trans-stand yellow-page">
        <img src={img.transform} alt="img-transform" />
      </div>
    </div>
  );
};

export default Transform;
