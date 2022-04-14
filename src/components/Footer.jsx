import React from "react";
// Footer fait vite fait - modifs a effectuer //

const Footer = () => {
  return (
    <div className="footer">
      <div className="bg-tertiary-1 flex flex-row ">
        <h1 className="font-title text-main-2 ml-24 pt-6 pb-6 text-3xl tracking-wide">
          {" "}
          XPANSE{" "}
        </h1>
        <div className="flex flex-row items-center pl-28 ml-80">
          <div className="pr-5">
            <img
              src="../assets/images/instagramLogo.png"
              alt="instagram"
              width="20"
            />
          </div>
          <div className="pr-5">
            <img
              src="../assets/images/linkedinLogo.png"
              alt="linkedin"
              width="20"
            />
          </div>
          <div className="">
            <img
              src="../assets/images/facebookLogo.png"
              alt="facebook"
              width="20"
            />
          </div>
          <div className="flex font-primary text-main-2 justify-between ">
            <h2 className="ml-96 pr-4">Call us </h2>
            <h3 className="pr-4">Find us</h3>
            <h4>Jobs</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
