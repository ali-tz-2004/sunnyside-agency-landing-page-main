import { Icons, LinksTfoot } from "./ClientsInfo";
import { Link } from "react-router-dom";

const Tfoot = () => {
  return (
    <div className="tfoot">
      <div className="tfoot-title">
        <h2>sunnyside</h2>
      </div>
      <div className="tfoot-links">
        {LinksTfoot.map((x) => (
          <Link>{x.text}</Link>
        ))}
      </div>
      <div className="tfoot-icons">
        {Icons.map((x) => (
          <img src={x.img} alt="" />
        ))}
      </div>
    </div>
  );
};
export default Tfoot;
