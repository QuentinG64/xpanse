import React from "react";

const BlockTxt = () => {
  return (
    <div className="bg-main-1">
      <div className="grid gap-60 grid-cols-3 ml-20 mr-20">
        <div className="flex flex-col border-t-4 text-main-2 mt-20 ">
          <div className="font-title  pt-5 pb-10 ">
            <h1 className="text-4xl text-primary-1">
              The genesis <br />
            </h1>
            <h2 className="text-3xl text-main-2 ">
              of our <br /> history
            </h2>
            <h3 className="text-main-2 text-sm ">is made of dust</h3>
          </div>
          <h4 className="font-primary text-main-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Cras sed dui euismod, posuere diam in, vestibulum diam. <br />
            Nunc cursus ullamcorper aliquet. <br />
            Orci varius natoque penatibus et magnis dis parturient <br />
            montes, nascetur ridiculus mus.
            <br />
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
          <div className="font-title pt-5 pb-10  text-left">
            <h1 className="text-4xl text-primary-1">
              The crew <br />
            </h1>
            <h2 className="text-3xl text-main-2 ">
              behind the <br /> screen
            </h2>
            <h3 className="text-main-2 text-sm ">is lovely</h3>
          </div>
          <h4 className="font-primary text-main-2 text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Cras sed dui euismod, posuere diam in, vestibulum diam. <br />
            Nunc cursus ullamcorper aliquet. <br />
            Orci varius natoque penatibus et magnis dis parturient <br />
            montes, nascetur ridiculus mus.
            <br />
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
            <h1 className="text-4xl text-main-2">
              How to cultivate <br />
            </h1>
            <h2 className="text-3xl text-primary-1 ">love and freedom</h2>
            <h3 className="text-main-2 text-sm ">beyond the tech</h3>
          </div>
          <h4 className="font-primary text-main-2 text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Cras sed dui euismod, posuere diam in, vestibulum diam. <br />
            Nunc cursus ullamcorper aliquet. <br />
            Orci varius natoque penatibus et magnis dis parturient <br />
            montes, nascetur ridiculus mus.
            <br />
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
