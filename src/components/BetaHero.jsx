import React from "react";

const BetaHero = () => {
  return (
    <section className="beta-hero clr-white flow">
      <p className="h1"> We're in Beta. Get your invite today!</p>
      <button className="btn btn2 flex">
        <p className="h4">Get an Invite</p>
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
    </section>
  );
};

export default BetaHero;
