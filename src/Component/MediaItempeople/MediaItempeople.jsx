/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image from "../images/image.png";
import { Link } from "react-router-dom";

export default function MediaItem({ movie }) {
  return (
    <>
      <div className="col-lg-2 col-md-4">
        <Link to={"/moviedetails/" + movie.id + "/person"}>
          <div className="movie position-relative">
            {movie.poster_path ? (
              <img
                className=" w-100"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              />
            ) : (
              ""
            )}
            {movie.profile_path ? (
              <img
                className=" w-100"
                src={"https://image.tmdb.org/t/p/w500" + movie.profile_path}
              />
            ) : (
              ""
            )}
            {!movie.poster_path && !movie.profile_path ? (
              <img className="w-100" height="250" src={image} alt="" />
            ) : (
              ""
            )}
            <h3 className=" my-2 h6">
              {movie.title} {movie.name}
            </h3>
            {movie.vote_average ? (
              <div className="vote p-2 text-center position-absolute top-0 end-0">
                {movie.vote_average?.toFixed(1)}
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </>
  );
}
