import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const videoSrc = "../assets/video/aboutUs.mp4";
  return (
    <div className="App">
      <ReactPlayer url={videoSrc} width="100%" height="100%" playing loop />
    </div>
  );
};

export default Video;
