import React from "react";
// import spotGif from "../src/assets/gifs/target_spot.gif";
import spotGif from "../assets/gifs/target_spot.gif";

const Loading = () => {
  return (
    <>
      <div className="App">
        <h1>Loading...🎯</h1>
        <img src={spotGif} alt="loading..." />
      </div>
    </>
  );
};

export default Loading;
