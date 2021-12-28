import React from "react";
import { Link } from "react-router-dom";
import spotGif from "../assets/gifs/target_spot.gif";

const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <h1>404 Sorry Page Not Found</h1>
        <img className="targetSpot" src={spotGif} alt="not found..." />
        <Link to="/">Back Home</Link>
      </div>
    </>
  );
};

export default NotFound;
