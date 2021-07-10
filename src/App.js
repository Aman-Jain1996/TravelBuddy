import "./styles.css";
import { useState } from "react";
import travelDB from "./db.js";

const country = Object.keys(travelDB);

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  function ClickHandler(item) {
    setSelectedCountry(item);
  }

  return (
    <div>
      <header>
        <div>TravelBuddy</div>
      </header>

      <div className="hero hero-container">
        <div className="image-container">
          <img src="images/hero.svg" alt="Logo" />
        </div>
        <div className="desc-container text-container text-bold">
          Love Travelling or just bluffing people by putting Travel Freak in
          insta bio
          <br />
          <br /> Check out the best recommendations from us for you next plan
        </div>
      </div>

      <div className="country-container">
        {country.map((item) => {
          return (
            <div
              className="btn-country"
              key={item}
              onClick={() => ClickHandler(item)}
            >
              {item}
            </div>
          );
        })}
      </div>

      <div>
        {travelDB[selectedCountry].map((item) => {
          return (
            <div className=" hero hero-container" key={item.city}>
              <div className="image-container">
                <img className="image-container" alt="City" src={item.poster} />
              </div>
              <div className="desc-container text-container">
                <span className="city">
                  <span className="heading">City : </span>
                  {item.name}
                </span>
                <span className="population">
                  <span className="heading">Population : </span>
                  {item.population} |{" "}
                  <span className="heading">Area: &nbsp;</span>
                  {item.size}`
                </span>
                <p className="city-desc">{item.fact}</p>
              </div>
            </div>
          );
        })}
      </div>

      <footer>
        <p>
          The world is a book and those who do not travel read only one page ~
          Saint Augustine
        </p>
        <p style={{ margin: "auto" }}>Made with 💛 by @AJ-Creations</p>
      </footer>
    </div>
  );
}
