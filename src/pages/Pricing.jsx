import React, { useEffect, useState } from "react";
import BetaHero from "../components/BetaHero";
import { Footer } from "../components/Footer";

import hero1 from "../assets/pricing/mobile/hero.jpg";
import hero2 from "../assets/pricing/tablet/hero.jpg";
import hero3 from "../assets/pricing/desktop/hero.jpg";

import checkIcon from "../assets/pricing/desktop/check.svg";

const Pricing = () => {
  const [headerItems, setHeaderItems] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setHeaderItems([
          <div key="basic" className="grid-header-item">
            <p className="h4">Basic</p>
          </div>,
          <div key="pro" className="grid-header-item">
            <p className="h4">Pro</p>
          </div>,
          <div key="business" className="grid-header-item">
            <p className="h4">Business</p>
          </div>,
        ]);
      } else {
        setHeaderItems(null);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [priceMultiplier, setPriceMultiplier] = useState(1);

  const handleCheckboxChange = (event) => {
    const priceMultiplier = event.target.checked ? 10 : 1;
    setPriceMultiplier(priceMultiplier);
  };
  return (
    <div>
      <section className="sectionHome-top">
        <div className="wrapper bg-black clr-white">
          <picture>
            <source media="(max-width: 767px)" srcSet={hero3} />
            <source
              media="(min-width: 768px) and (max-width: 1239px)"
              srcSet={hero2}
            />
            <img src={hero3} alt="Image" />
          </picture>
          <div className="container flow" style={{ "--flow-spacer": "21px" }}>
            <p className="h1"> FEATURES</p>
            <p>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
      </section>
      <section className="sectionPricing-top container">
        <div className="switch__wrapper">
          <span className="h3">Monthly</span>
          <label className="switch">
            <input type="checkbox" onChange={handleCheckboxChange} />
            <span className="slider"></span>
          </label>
          <span className="h3">Yearly</span>
        </div>
        <div className="container">
          <div
            className="card flow bg-gray "
            style={{ "--flow-spacer": "21px" }}
          >
            <p className="h2">Basic</p>
            <p className="card-text">
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
            <div className="card__pricing">
              <p className="h1"> {`$${19.0 * priceMultiplier}`} </p>
              <p>{priceMultiplier == 1 ? "per month" : "per year"}</p>
            </div>
            <button className="btn1">Pick Plan</button>
          </div>

          <div
            className="card flow bg-black clr-white"
            style={{ "--flow-spacer": "21px" }}
          >
            <p className="h2">Pro</p>
            <p className="card-text">
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <div className="card__pricing">
              <p className="h1"> {`$${39.0 * priceMultiplier}`}</p>
              <p>{priceMultiplier == 1 ? "per month" : "per year"}</p>
            </div>
            <button className="btn3">Pick Plan</button>
          </div>

          <div
            className="card flow bg-gray"
            style={{ "--flow-spacer": "2.5rem" }}
          >
            <p className="h2">Business</p>
            <p className="card-text">
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
            <div className="card__pricing">
              <p className="h1"> {`$${99.0 * priceMultiplier}`} </p>
              <p>{priceMultiplier == 1 ? "per month" : "per year"}</p>
            </div>
            <button className="btn1">Pick Plan</button>
          </div>
        </div>
      </section>
      <section className="sectionPricing-bottom container">
        <p className="h1">COMPARE</p>
        <div className="grid-container">
          <div className="grid-header">
            <p className="h4 align-left">The Features</p>
          </div>
          <div className="grid-header">
            <p className="h4">Basic</p>
          </div>
          <div className="grid-header">
            <p className="h4">Pro</p>
          </div>
          <div className="grid-header">
            <p className="h4">Business</p>
          </div>

          <div className="grid-item span3">
            <p className="h4">Unlimited story posting</p>
          </div>
          {headerItems}

          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>

          <div className="grid-item span3">
            <p className="h4">Unlimited Photo Upload</p>
          </div>
          {headerItems}

          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>

          <div className="grid-item span3">
            <p className="h4">Embedding Custom Content</p>
          </div>
          {headerItems}

          <div className="grid-item border-btm"></div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>

          <div className="grid-item span3">
            <p className="h4">Customize Metadata</p>
          </div>
          {headerItems}
          <div className="grid-item border-btm"></div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>

          <div className="grid-item span3">
            <p className="h4">Advanced Metrics</p>
          </div>
          {headerItems}
          <div className="grid-item border-btm"></div>
          <div className="grid-item border-btm"></div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>

          <div className="grid-item span3">
            <p className="h4">Photo Downloads</p>
          </div>
          {headerItems}
          <div className="grid-item border-btm"></div>
          <div className="grid-item border-btm"></div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>

          <div className="grid-item span3">
            <p className="h4">Search Engine Indexing</p>
          </div>
          {headerItems}

          <div className="grid-item border-btm"></div>
          <div className="grid-item border-btm"></div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>

          <div className="grid-item span3">
            <p className="h4">Custom Analytics</p>
          </div>
          {headerItems}
          <div className="grid-item border-btm"></div>
          <div className="grid-item border-btm"></div>
          <div className="grid-item border-btm">
            <img src={checkIcon} alt="" />
          </div>
        </div>
      </section>
      <BetaHero />
      <Footer />
    </div>
  );
};

export default Pricing;
