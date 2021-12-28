import React from "react";
import spotGif from "../assets/gifs/target_spot.gif";

const Loading = () => {
  return (
    <>
      <div className="app">
        <h1>Loading...🎯</h1>
        <img className="targetSpot" src={spotGif} alt="loading..." />
      </div>
    </>
  );
};

export default Loading;
