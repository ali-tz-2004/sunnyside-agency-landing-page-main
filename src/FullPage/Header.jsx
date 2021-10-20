import * as img from "../images/export";
const Header = () => {
  let li = [
    { id: 1, name: "About" },
    { id: 2, name: "Services" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Contact" },
  ];
  return (
    <div
      className="page-blue"
      style={{ backgroundImage: `url(${img.header})` }}
    >
      <nav className="navbar">
        <h2>sunnyside</h2>
        <ul className="ul-navbar">
          {li.map((x) => (
            <li key={x.id}>{x.name}</li>
          ))}
        </ul>
      </nav>
      <div className="body-page-blue">
        <h2 className="title-page-blue">WE ARE CREATIVES</h2>
        <div className="img-blue-page">
          <div className="img-arrow_down">
            <img src={img.arrow_down} alt="arrow down" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;