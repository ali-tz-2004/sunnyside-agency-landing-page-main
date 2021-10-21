import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./FullPage/Header";
import Transform from "./FullPage/Transform";
import StandOut from "./FullPage/StandOut";
import GraphicAndPhotography from "./FullPage/GraphicAndPhotography";
import Clients from "./FullPage/Clients";
import Gallery from "./FullPage/Gallery";
import Tfoot from "./FullPage/Tfoot";

const App = () => {
  return (
    <Router>
      <Header />
      <Transform />
      <StandOut />
      <GraphicAndPhotography />
      <Clients />
      <Gallery />
      <Tfoot />
    </Router>
  );
};

export default App;
