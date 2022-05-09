import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import PropTypes from "prop-types";

const CardFreelance = ({
  name: missionName,
  launch_service_provider: launchServiceProvider,
  window_start: windowStart,
  rocket,
  pad,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const heartClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Tilt>
      <div className="w-60 h-80 lg:h-36 lg:w-80 rounded-2xl bg-gradient-to-t from-slate-200/40 to-slate-600/70 bg-opacity-10 backdrop-blur-lg relative z-2 shadow-5xl border border-opacity-5 border-r-0 border-b-0 backdrop-filter hover:border-2 ease-in duration-100">
        <div className="h-full w-full flex flex-col justify-around items-center ">
          <div className="flex justify-center items-center w-full lg:w-4/5 px-2">
            <input
              type="image"
              onClick={heartClickFavorite}
              onKeyDown={heartClickFavorite}
              src={
                isFavorite
                  ? "./assets/images/heartFill.png"
                  : "./assets/images/heartEmpty.png"
              }
              alt="heart"
              className="cursor-pointer h-4 w-4 absolute top-5 right-3"
            />

            <h1 className="text-main-2 font-title text-sm h-10 mt-3 lg:h-auto lg:m-0 lg:mt-2 lg:text-center mr-[10%] text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300">
              {launchServiceProvider.name}
            </h1>
          </div>

          <div className="relative font-primary text-left w-full pl-4 pr-4 mb-7 lg:m-0">
            <h2 className="text-main-2 font-primary h-10 text-sm mt-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300 lg:m-0 lg:h-auto lg:text-center lg:mb-1">
              {missionName}
            </h2>
            <p className="dataCard lg:m-0 lg:text-center lg:mt-2">
              {" "}
              ⏱ {windowStart}{" "}
            </p>
            <p className="dataCard lg:hidden">
              🚀{" "}
              <span className="font-second lg:hidden">
                {rocket && rocket.configuration.name}
              </span>
            </p>

            <p className="dataCard lg:m-0 lg:text-center">
              📍 {pad && pad.location.name}{" "}
            </p>
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="cursor-pointer text-xs mb-3 rounded-2xl px-4 py-1 lg:mt-2 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
              >
                <a href={pad && pad.wiki_url} target="_blank" rel="noreferrer">
                  READ MORE
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

CardFreelance.propTypes = {
  name: PropTypes.string.isRequired,
  launch_service_provider: PropTypes.shape({ name: PropTypes.string })
    .isRequired,
  window_start: PropTypes.string.isRequired,
  rocket: PropTypes.shape({
    configuration: PropTypes.shape({ name: PropTypes.string }),
  }).isRequired,
  pad: PropTypes.shape({
    location: PropTypes.shape({ name: PropTypes.string }),
    wiki_url: PropTypes.string,
  }).isRequired,
  mission: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
};

export default CardFreelance;
