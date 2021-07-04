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
        <div className="desc-container">
          Love Travelling.....
          <br /> Check our recommendation
        </div>
        <div className="image-container">
          <img src="images/hero.svg" alt="Logo" />
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

      <hr />

      <div>
        {travelDB[selectedCountry].map((item) => {
          return (
            <div className="hero-container" key={item.city}>
              <div className="image-container">
                <img alt="City" src={item.poster} />
              </div>
              <div className="text-container">
                <span className="city">{item.name}</span>
                <span className="country">{item.country}</span>
                <span className="population">
                  {item.population} | {item.size}`
                </span>
                <p>{item.fact}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
