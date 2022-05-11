import React from "react";

const BlockTxt = () => {
  return (
    <div className="bg-main-1">
      <div className="grid gap-60 grid-cols-3 ml-20 mr-20 lg:grid-cols-1 lg:gap-10">
        <div className="flex flex-col border-t-4 text-main-2 mt-20 ">
          <div className="font-title  pt-5 pb-10 ">
            <h1 className="text-4xl text-primary-1">The genesis</h1>
            <h2 className="text-3xl text-main-2 ">of our history</h2>
            <h3 className="text-main-2 text-sm ">is made of dust</h3>
          </div>
          <h4 className="font-primary text-main-2 text-sm">
            “You want to wake up in the morning and think the future is going to
            be great - and that’s what being a spacefaring civilization is all
            about. It’s about believing in the future and thinking that the
            future will be better than the past. And I can’t think of anything
            more exciting than going out there and being among the stars.”
            <br />
          </h4>
          <div className="flex flex-row mt-4 items-center">
            <img
              src="./assets/images/arrowAboutUs.png"
              alt="arrow"
              width="120"
            />
            <h5 className="text-primary-1 ml-4"> Learn More </h5>
          </div>
        </div>
        <div className="flex flex-col text-main-2 border-t-4 mt-20">
          <div className="font-title pt-5 pb-10  text-left">
            <h1 className="text-4xl text-primary-1">The crew</h1>
            <h2 className="text-3xl text-main-2 ">behind the screen</h2>
            <h3 className="text-main-2 text-sm ">is lovely</h3>
          </div>
          <h4 className="font-primary text-main-2 text-sm ">
            Xpanse agency has gained worldwide attention for a series of
            historic milestones. It is the only private company capable of
            returning a spacecraft from low-Earth orbit, and in 2012 our Dragon
            spacecraft became the first commercial spacecraft to deliver cargo
            to and from the International Space Station. And in 2020, Xpanse
            agency became the first private company to take humans there as
            well.
          </h4>
          <div className="flex flex-row mt-4 items-center">
            <img
              src="../assets/images/arrowAboutUs.png"
              alt="arrow"
              width="120"
            />
            <h5 className="text-primary-1 ml-4"> Learn More </h5>
          </div>
        </div>
        <div className="flex flex-col text-main-2 border-t-4 mt-20">
          <div className="font-title pt-5 pb-10 text-left">
            <h1 className="text-4xl text-main-2">How to cultivate</h1>
            <h2 className="text-3xl text-primary-1 ">love and freedom</h2>
            <h3 className="text-main-2 text-sm ">beyond the tech</h3>
          </div>
          <h4 className="font-primary text-main-2 text-sm ">
            With space sustainability in mind, we have pushed the
            state-of-the-art in key technology areas like flying satellites at
            challenging low altitudes. We are striving to be the world’s most
            open and transparent satellite operator, and we encourage other
            operators to join us in sharing orbital data and keeping the public
            and governments updated with detailed information about operations
            and practices.
          </h4>
          <div className="flex flex-row mt-4 items-center">
            <img
              src="../assets/images/arrowAboutUs.png"
              alt="arrow"
              width="120"
            />
            <h5 className="text-primary-1 ml-4"> Learn More </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTxt;
