import React from "react";
import createAndShare1 from "../assets/stories/mobile/moon-of-appalacia.jpg";
import createAndShare2 from "../assets/stories/tablet/moon-of-appalacia.jpg";
import createAndShare3 from "../assets/stories/desktop/moon-of-appalacia.jpg";

const Header = () => {
  return (
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
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
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
  );
};

export default Header;
