import "./App.css";
import logo from "./asserts/logo.png";
import trophy from "./asserts/1.png";
import award from "./asserts/2.png";
import tools from "./asserts/3.png";

import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="hero">
        <div className="pic">
          <img src={trophy} alt="" />
        </div>
        <div className="hero-text">
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={award} alt="" />
          <p>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="text">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
      </div>
      <div className="tools">
        <img src={tools} alt="" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr />
        <p>
          <strong>
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </strong>
          4
        </p>
        <p className="tools-space">
          CHEMICALS <span className="line">|</span> PROCESS POWER WATER{" "}
          <span className="line">|</span> WASTE WATER OILS{" "}
          <span className="line">|</span> GAS PHARMA SUGARS
          <span className="line">|</span> DISTILLERIES PAPER{" "}
          <span className="line">|</span> PULP MARINE{" "}
          <span className="line">|</span> DEFENCE METAL{" "}
          <span className="line">|</span> MINING FOOD{" "}
          <span className="line">|</span>
          BEVERAGE PETROCHEMICAL <span className="line">|</span> REFINERIES
          SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE{" "}
          <span className="line">|</span> RESIDENTIAL
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
