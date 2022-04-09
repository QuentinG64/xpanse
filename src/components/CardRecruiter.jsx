import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

const CardRecruiter = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const heartClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Tilt>
      <div className="w-56 h-80 rounded-2xl bg-gradient-to-t from-free-card-bot/30 to-free-card-top/80 bg-opacity-10 backdrop-blur-lg relative z-2 shadow-5xl border border-opacity-5 border-r-0 border-b-0 backdrop-filter hover:border-2 ease-in duration-100">
        <div className="h-full w-full flex flex-col justify-around items-center ">
          <div className="flex justify-between items-center w-full px-2">
            <h2 className="text-main-2 font-title text-center text-sm mt-3">
              {props.name}
            </h2>
            <img
              onClick={heartClickFavorite}
              src={
                isFavorite
                  ? "../assets/images/heartFill.png"
                  : "../assets/images/heartEmpty.png"
              }
              alt="heart"
              className="cursor-pointer h-4 w-4"
            />
          </div>

          <div className="h-max w-max overflow-hidden mt-2 rounded-lg ">
            <img
              src={props.profile_image_thumbnail}
              alt={props.name}
              className="object-cover opacity-80"
            />
          </div>

          <div className="relative font-primary text-left w-full pl-4">
            <p className="dataCard">Nationality: {props.nationality}</p>
            <p className="dataCard">Date of birth: {props.date_of_birth}</p>
            <p className="dataCard">Agency: {props.agency.country_code}</p>
            <p className="dataCard">Status: {props.status.name}</p>
            {/* <p className="dataCard">
              {props.twitter ? " Twitter: " + props.twitter : null}
            </p> */}
          </div>

          <button className="cursor-pointer text-xs mb-3 rounded-2xl px-4 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 ">
            <a href={props.wiki} target="_blank">
              READ MORE
            </a>
          </button>
        </div>
      </div>
    </Tilt>
  );
};

//

export default CardRecruiter;
