import React from "react";
import createAndShare1 from "../assets/home/mobile/create-and-share.jpg";
import createAndShare2 from "../assets/home/tablet/create-and-share.jpg";
import createAndShare3 from "../assets/home/desktop/create-and-share.jpg";
import beautifulStory1 from "../assets/home/mobile/beautiful-stories.jpg";
import beautifulStory2 from "../assets/home/tablet/beautiful-stories.jpg";
import beautifulStory3 from "../assets/home/desktop/beautiful-stories.jpg";
import design1 from "../assets/home/mobile/designed-for-everyone.jpg";
import design2 from "../assets/home/tablet/designed-for-everyone.jpg";
import design3 from "../assets/home/desktop/designed-for-everyone.jpg";

import mountain from "../assets/stories/mobile/mountains.jpg";
import architecturals from "../assets/stories/mobile/architecturals.jpg";
import voyages from "../assets/stories/mobile/18-days-voyage.jpg";
import cityscapes from "../assets/stories/mobile/cityscapes.jpg";
import mountain1 from "../assets/stories/desktop/mountains.jpg";
import architecturals1 from "../assets/stories/desktop/architecturals.jpg";
import voyages1 from "../assets/stories/desktop/18-days-voyage.jpg";
import cityscapes1 from "../assets/stories/desktop/cityscapes.jpg";

import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section className="sectionHome-top">
        <div className="wrapper bg-black clr-white">
          <picture>
            <source media="(max-width: 767px)" srcSet={createAndShare3} />
            <source
              media="(min-width: 768px) and (max-width: 1239px)"
              srcSet={createAndShare2}
            />
            <img src={createAndShare3} alt="Image" />
          </picture>
          <div className="container flow" style={{ "--flow-spacer": "21px" }}>
            <p className="h1">Create and share your photo Stories</p>
            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <button className="btn btn2 flex">
              <p className="h4">GET AN INVITE</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="14"
                viewBox="0 0 42 14"
                fill="none"
              >
                <path d="M0 7H41.864" stroke="white" />
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
              </svg>
            </button>
          </div>
        </div>
        <div className="wrapper">
          <picture>
            <source media="(max-width: 767px)" srcSet={beautifulStory3} />
            <source
              media="(min-width: 768px) and (max-width: 1239px)"
              srcSet={beautifulStory2}
            />
            <img src={beautifulStory3} alt="Image" />
          </picture>
          <div className="container flow" style={{ "--flow-spacer": "21px" }}>
            <p className="h1">Beautiful stories every time</p>
            <p>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <button className="btn btn2 flex">
              <p className="h4">VIEW THE STORIES</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="14"
                viewBox="0 0 42 14"
                fill="none"
              >
                <path d="M0 7H41.864" stroke="black" />
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="black" />
              </svg>
            </button>
          </div>
        </div>
        <div className="wrapper">
          <picture>
            <source media="(max-width: 767px)" srcSet={design3} />
            <source
              media="(min-width: 768px) and (max-width: 1239px)"
              srcSet={design2}
            />
            <img src={design3} alt="Image" />
          </picture>
          <div className="container flow" style={{ "--flow-spacer": "21px" }}>
            <p className="h1">Designed for everyone</p>
            <p>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <button className="btn btn2 flex">
              <p className="h4">VIEW THE STORIES</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="14"
                viewBox="0 0 42 14"
                fill="none"
              >
                <path d="M0 7H41.864" stroke="black" />
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="black" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="sectionHome-middle clr-white">
        <div className="card">
          <div className="card-desc ">
            <p className="h3">The Mountains </p>
            <p>by John Appleseed</p>
            <button className="btn btn2 flex">
              <p className="h4">READ STORY</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="14"
                viewBox="0 0 42 14"
                fill="none"
              >
                <path d="M0 7H41.864" stroke="white" />
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
              </svg>
            </button>
          </div>
          <picture>
            <source media="(max-width: 767px)" srcSet={mountain} />
            <img src={mountain1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">Sunset Cityscapes</p>
            <p>by Benjamin Cruz</p>
            <button className="btn btn2 flex">
              <p className="h4">READ STORY</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="14"
                viewBox="0 0 42 14"
                fill="none"
              >
                <path d="M0 7H41.864" stroke="white" />
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
              </svg>
            </button>
          </div>
          <picture>
            <source media="(max-width: 767px)" srcSet={cityscapes} />
            <img src={cityscapes1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3"> 18 Days Voyage</p>
            <p>by Alexei Borodin</p>
            <button className="btn btn2 flex">
              <p className="h4">READ STORY</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="14"
                viewBox="0 0 42 14"
                fill="none"
              >
                <path d="M0 7H41.864" stroke="white" />
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
              </svg>
            </button>
          </div>
          <picture>
            <source media="(max-width: 767px)" srcSet={voyages} />
            <img src={voyages1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">Architecturals</p>
            <p>by Samantha Brooke</p>
            <button className="btn btn2 flex">
              <p className="h4">READ STORY</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="14"
                viewBox="0 0 42 14"
                fill="none"
              >
                <path d="M0 7H41.864" stroke="white" />
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
              </svg>
            </button>
          </div>
          <picture>
            <source media="(max-width: 767px)" srcSet={architecturals} />
            <img src={architecturals1} alt="" />
          </picture>
        </div>
      </section>
      <section className="sectionHome-bottom container">
        <div className="feature flow">
          <img src={responsive} alt="" />
          <p className="h3">100% Responsive</p>
          <p>
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
        <div className="feature flow">
          <img src={noLimit} alt="" />
          <p className="h3">No Photo Upload Limit</p>
          <p>
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
        <div className="feature flow">
          <img src={embed} alt="" />
          <p className="h3">Available to Embed</p>
          <p>
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
