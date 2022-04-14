import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

const CardFreelance = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const heartClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Tilt>
      <div className="w-56 h-80 rounded-2xl bg-gradient-to-t from-gray-400/30 to-slate-600/80 bg-opacity-10 backdrop-blur-lg relative z-2 shadow-5xl border border-opacity-5 border-r-0 border-b-0 backdrop-filter hover:border-2 ease-in duration-100">
        <div className="h-full w-full flex flex-col justify-around items-center ">
          <div className="w-full px-2">
            <img
              onClick={heartClickFavorite}
              src={
                isFavorite
                  ? "../assets/images/heartFill.png"
                  : "../assets/images/heartEmpty.png"
              }
              alt="heart"
              className="cursor-pointer h-4 w-4 absolute top-2 right-3"
            />
            <h1 className="text-main-2 font-title text-center text-sm mt-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300">
              {props.launch_service_provider.name}
            </h1>
          </div>

          {/* <div className="h-max w-max overflow-hidden mt-2 rounded-lg ">
            <img
              src={props.profile_image_thumbnail}
              alt={props.name}
              className="object-cover opacity-80"
            />
          </div> */}

          <div className="relative font-primary text-left w-full pl-4 pr-4 pb-2">
            <h2 className="text-main-2 font-primary text-center text-sm mt-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300">
              {props.name.mission}
            </h2>
            <p className="dataCard">Nationality:</p>
            <p className="dataCard">Date of birth: </p>
            <p className="dataCard">Agency: </p>
            <p className="dataCard">Status: </p>
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

          {/* <button className="cursor-pointer text-xs mb-3 rounded-2xl px-4 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 ">
            <a href={props.wiki} target="_blank">
              READ MORE
            </a>
          </button> */}
        </div>
      </div>
    </Tilt>
  );
};

//

export default CardFreelance;
