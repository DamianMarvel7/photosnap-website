import React from "react";

import hero from "../assets/features/tablet/hero.jpg";
import hero2 from "../assets/features/desktop/hero.jpg";

import betaHero1 from "../assets/shared/mobile/bg-beta.jpg";
import betaHero2 from "../assets/shared/tablet/bg-beta.jpg";
import betaHero3 from "../assets/shared/desktop/bg-beta.jpg";

import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
import customDomain from "../assets/features/desktop/custom-domain.svg";
import boostExposure from "../assets/features/desktop/boost-exposure.svg";
import dragDrop from "../assets/features/desktop/drag-drop.svg";
import { Footer } from "../components/Footer";
import BetaHero from "../components/BetaHero";

const Features = () => {
  return (
    <div>
      <section className="sectionHome-top">
        <div className="wrapper bg-black clr-white">
          <picture>
            <source media="(max-width: 767px)" srcSet={hero2} />
            <source
              media="(min-width: 768px) and (max-width: 1239px)"
              srcSet={hero}
            />
            <img src={hero2} alt="Image" />
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

      <section className="sectionHome-bottom container sectionFeature">
        <div className="feature flow">
          <img src={responsive} alt="" className="feature-icon" />
          <p className="h3">100% Responsive</p>
          <p>
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
        <div className="feature flow">
          <img src={noLimit} alt="" className="feature-icon" />
          <p className="h3">No Photo Upload Limit</p>
          <p>
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
        <div className="feature flow">
          <img src={embed} alt="" className="feature-icon" />
          <p className="h3">Available to Embed</p>
          <p>
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
        <div className="feature flow">
          <img src={customDomain} alt="" className="feature-icon" />
          <p className="h3">Custom Domain</p>
          <p>
            With Photosnap subscriptions you can host your stories on your own
            domain. You can also remove our branding!
          </p>
        </div>
        <div className="feature flow">
          <img src={boostExposure} alt="" className="feature-icon" />
          <p className="h3">Boost Your Exposure</p>
          <p>
            Users that viewed your story or gallery can easily get notifed of
            new and featured stories with our built in mailing list.
          </p>
        </div>
        <div className="feature flow">
          <img src={dragDrop} alt="" className="feature-icon" />
          <p className="h3">Drag & Drop Image</p>
          <p>
            Easily drag and drop your image and get beautiful shots everytime.
            No over the top tooling to add friction to creating stories.
          </p>
        </div>
      </section>
      <BetaHero />
      <Footer />
    </div>
  );
};

export default Features;
