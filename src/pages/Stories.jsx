import { Footer } from "../components/Footer";

import mountain from "../assets/stories/mobile/mountains.jpg";
import architecturals from "../assets/stories/mobile/architecturals.jpg";
import voyages from "../assets/stories/mobile/18-days-voyage.jpg";
import cityscapes from "../assets/stories/mobile/cityscapes.jpg";
import wordTour from "../assets/stories/mobile/world-tour.jpg";
import unforeseenCorners from "../assets/stories/mobile/unforeseen-corners.jpg";
import kingOnAfrica from "../assets/stories/mobile/king-on-africa.jpg";
import tripToNowhere from "../assets/stories/mobile/trip-to-nowhere.jpg";
import rageOfTheSea from "../assets/stories/mobile/rage-of-the-sea.jpg";
import runningFree from "../assets/stories/mobile/running-free.jpg";
import behindTheWaves from "../assets/stories/mobile/behind-the-waves.jpg";
import calmWaters from "../assets/stories/mobile/calm-waters.jpg";
import milkyWay from "../assets/stories/mobile/milky-way.jpg";
import darkForest from "../assets/stories/mobile/dark-forest.jpg";
import somwarpet from "../assets/stories/mobile/somwarpet.jpg";
import landOfDreams from "../assets/stories/mobile/land-of-dreams.jpg";

import mountain1 from "../assets/stories/desktop/mountains.jpg";
import architecturals1 from "../assets/stories/desktop/architecturals.jpg";
import voyages1 from "../assets/stories/desktop/18-days-voyage.jpg";
import cityscapes1 from "../assets/stories/desktop/cityscapes.jpg";
import wordTour1 from "../assets/stories/desktop/world-tour.jpg";
import unforeseenCorners1 from "../assets/stories/desktop/unforeseen-corners.jpg";
import kingOnAfrica1 from "../assets/stories/desktop/king-on-africa.jpg";
import tripToNowhere1 from "../assets/stories/desktop/trip-to-nowhere.jpg";
import rageOfTheSea1 from "../assets/stories/desktop/rage-of-the-sea.jpg";
import runningFree1 from "../assets/stories/desktop/running-free.jpg";
import behindTheWaves1 from "../assets/stories/desktop/behind-the-waves.jpg";
import calmWaters1 from "../assets/stories/desktop/calm-waters.jpg";
import milkyWay1 from "../assets/stories/desktop/milky-way.jpg";
import darkForest1 from "../assets/stories/desktop/dark-forest.jpg";
import somwarpet1 from "../assets/stories/desktop/somwarpet.jpg";
import landOfDreams1 from "../assets/stories/desktop/land-of-dreams.jpg";
import Header from "../components/Header";

import moon2 from "../assets/stories/tablet/moon-of-appalacia.jpg";
import moon3 from "../assets/stories/desktop/moon-of-appalacia.jpg";

const Stories = () => {
  return (
    <div>
      <section className="sectionHome-top headerStories">
        <div className="wrapper bg-black clr-white">
          <picture>
            <source media="(max-width: 767px)" srcSet={moon3} />
            <source
              media="(min-width: 768px) and (max-width: 1239px)"
              srcSet={moon2}
            />
            <img src={moon3} alt="Image" />
          </picture>
          <div className="container flow" style={{ "--flow-spacer": "21px" }}>
            <p className="h5">Last month's featured story </p>
            <p className="h1"> Hazy full moon of Appalachia</p>
            <p> March 2nd 2020 by John Appleseed</p>
            <p>
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <button className="btn btn2 flex">
              <p className="h4">Read the story</p>
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

        <div className="card">
          <div className="card-desc ">
            <p className="h3">World Tour 2019</p>
            <p>by Timothy Wagner</p>
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
            <source media="(max-width: 767px)" srcSet={wordTour} />
            <img src={wordTour1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">Unforeseen Corners</p>
            <p>by William Malcolm</p>
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
            <source media="(max-width: 767px)" srcSet={unforeseenCorners} />
            <img src={unforeseenCorners1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">King on Africa: Part II</p>
            <p>by Tim Hillenburg</p>
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
            <source media="(max-width: 767px)" srcSet={kingOnAfrica} />
            <img src={kingOnAfrica1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">The Trip to Nowhere</p>
            <p>by Felicia Rourke</p>
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
            <source media="(max-width: 767px)" srcSet={tripToNowhere} />
            <img src={tripToNowhere1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">Rafge of The Sea</p>
            <p>by Mohammed Abdul</p>
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
            <source media="(max-width: 767px)" srcSet={rageOfTheSea} />
            <img src={rageOfTheSea1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">Running Free</p>
            <p>by Michelle</p>
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
            <source media="(max-width: 767px)" srcSet={runningFree} />
            <img src={runningFree1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">Behind the Waves</p>
            <p>by Lamar Wilson</p>
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
            <source media="(max-width: 767px)" srcSet={behindTheWaves} />
            <img src={behindTheWaves1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">Calm Waters</p>
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
            <source media="(max-width: 767px)" srcSet={calmWaters} />
            <img src={calmWaters1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">The Milky Way</p>
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
            <source media="(max-width: 767px)" srcSet={milkyWay} />
            <img src={milkyWay1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">Night at The Dark Forest</p>
            <p>by Mohammed Abdul</p>
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
            <source media="(max-width: 767px)" srcSet={darkForest} />
            <img src={darkForest1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">Somwarpet's Beauty</p>
            <p>by Michelle</p>
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
            <source media="(max-width: 767px)" srcSet={somwarpet} />
            <img src={somwarpet1} alt="" />
          </picture>
        </div>
        <div className="card">
          <div className="card-desc ">
            <p className="h3">Land of Dreams</p>
            <p>by William Malcolm</p>
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
            <source media="(max-width: 767px)" srcSet={landOfDreams} />
            <img src={landOfDreams1} alt="" />
          </picture>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Stories;
