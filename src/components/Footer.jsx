import React from "react";
import { Link } from "react-router-dom";
// Footer fait vite fait - modifs a effectuer //

const Footer = () => {
  return (
    <div className="flex flex-row bg-tertiary-1 w-full justify-around ">
      <div className="">
        <h1 className="font-title text-main-2 pt-6 pb-6 text-3xl tracking-wide w-6/12">
          <Link to="/"> XPANSE </Link>
        </h1>{" "}
      </div>
      <div className="flex flex-row justify-around items-center w-1/6">
        <img
          src="./assets/images/instagramLogo.png"
          alt="instagram"
          width="20"
        />
        <img src="./assets/images/linkedinLogo.png" alt="linkedin" width="20" />
        <img src="./assets/images/facebookLogo.png" alt="facebook" width="20" />
      </div>
      <div className="flex flex-row items-center font-primary text-main-2 justify-between ">
        <h2 className="pr-4">Call us </h2>
        <h3 className="pr-4">Find us</h3>
        <h4>Jobs</h4>
      </div>
    </div>
  );
};

export default Footer;
