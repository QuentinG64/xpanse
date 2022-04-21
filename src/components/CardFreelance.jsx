import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import PropTypes from "prop-types";

const CardFreelance = ({
  name,
  launch_service_provider,
  window_start,
  rocket,
  pad,
  mission,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const heartClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Tilt>
      <div className="w-60 h-80 rounded-2xl bg-gradient-to-t from-slate-200/40 to-slate-600/70 bg-opacity-10 backdrop-blur-lg relative z-2 shadow-5xl border border-opacity-5 border-r-0 border-b-0 backdrop-filter hover:border-2 ease-in duration-100">
        <div className="h-full w-full flex flex-col justify-around items-center ">
          <div className="w-full px-2">
            <input
              type="image"
              onClick={heartClickFavorite}
              onKeyDown={heartClickFavorite}
              src={
                isFavorite
                  ? "../assets/images/heartFill.png"
                  : "../assets/images/heartEmpty.png"
              }
              alt="heart"
              className="cursor-pointer h-4 w-4 absolute top-2 right-3"
            />
            <h1 className="text-main-2 font-title text-sm h-14 mt-3 mr-[10%] text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300">
              {launch_service_provider.name}
            </h1>
          </div>

          {/* <div className="h-max w-max overflow-hidden mt-2 rounded-lg ">
                <img
                  src={props.profile_image_thumbnail}
                  alt={props.name}
                  className="object-cover opacity-80"
                />
              </div> */}

          <div className="relative font-primary text-left w-full pl-4 pr-4 mb-7 overflow-scroll">
            <h2 className="text-main-2 font-primary h-10 text-sm mt-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300">
              {name}
            </h2>
            <p className="dataCard"> ⏱ {window_start} </p>
            <p className="dataCard">
              🚀{" "}
              <span className="font-second">
                {rocket && rocket.configuration.name}
              </span>
            </p>
            <p className="dataCard">📍 {pad && pad.location.name} </p>
            <p className="dataCard overflow-hidden pb-10">
              📋{" "}
              {mission
                ? mission.description
                : " For more information, contact us"}{" "}
            </p>
            {/* TWITTER & INSTAGRAM PROPS */}
            <div className="flex flex-row justify-evenly gap-5 align-center">
              {/* <p className="font-second">
            {props.twitter ? (
              <a
                className="text-blue-400 text-xs pb-10"
                href={props.twitter}
                target="_blank"
              >
                Twitter
              </a>
            ) : null}
          </p> */}

              {/* <p className="font-second">
            {props.instagram ? (
              <a
                className="text-pink-400 text-xs"
                href={props.instagram}
                target="_blank"
              >
                Instagram
              </a>
            ) : null}
          </p> */}
            </div>
          </div>

          <button
            type="button"
            className="cursor-pointer text-xs mb-3 rounded-2xl px-4 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
          >
            <a href={pad && pad.wiki_url} target="_blank" rel="noreferrer">
              READ MORE
            </a>
          </button>
        </div>
      </div>
    </Tilt>
  );
};

CardFreelance.prototype = {
  name: PropTypes.string.isRequired,
  launch_service_provider: PropTypes.object.isRequired,
  window_start: PropTypes.string.isRequired,
  rocket: PropTypes.object.isRequired,
  pad: PropTypes.object.isRequired,
  mission: PropTypes.object.isRequired,
};

//

export default CardFreelance;
