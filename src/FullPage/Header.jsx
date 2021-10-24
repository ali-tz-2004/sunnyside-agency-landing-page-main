import * as img from "../images/export";
import { useState } from "react";
const Header = () => {
  let li = [
    { id: 1, name: "About" },
    { id: 2, name: "Services" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Contact" },
  ];
  let [showLi, setShowLi] = useState({});
  const humburger = () => {};
  return (
    <section className="page-blue">
      <nav className="navbar">
        <h2>sunnyside</h2>
        <div className="hamburger" onClick={humburger}>
          <img src={img.hamburger} alt="humburger" />
        </div>
        <ul className="ul-navbar">
          {li.map((x) => (
            <li key={x.id}>{x.name}</li>
          ))}
        </ul>
      </nav>
      <div className="body-page-blue">
        <h2 className="title-page-blue">WE ARE CREATIVES</h2>
        <div className="img-blue-page">
          <img src={img.arrow_down} alt="arrow down" />
        </div>
      </div>
    </section>
  );
};
export default Header;
