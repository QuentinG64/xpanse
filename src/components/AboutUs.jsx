import React from "react";
import Video from "./Video";
import BlockTxt from "./BlockTxt";
import Infos from "./Infos";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <Video />
      <BlockTxt />
      <div className="sm:hidden">
        <Infos />
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
