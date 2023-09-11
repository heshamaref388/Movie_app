/* eslint-disable no-redeclare */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import image from "../images/image.png";

export default function MovieDetails() {
  let params = useParams();
  const [itemDetails, setItemDetails] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [count, setNewcount] = useState(1);
  // {https://www.imdb.com/title/tt8093700/}

  async function getItemsDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=34d2e2cb1e0798d6b0c47746202348cb&language=en-US`
    );
    setItemDetails(data);
  }
  async function getSimilar() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${params.media_type}/${params.id}/similar?api_key=34d2e2cb1e0798d6b0c47746202348cb&language=en-US&page=${count}`
    );
    setSimilar(data.results);
    // console.log(data.results);
  }
  useEffect(() => {
    getItemsDetails();
    getSimilar();
  }, [params.id, count, params.media_type]);
  console.log(itemDetails);
  function seeMore() {
    let newCount = count;
    newCount += 1;
    setNewcount(newCount);
  }
  if (itemDetails.backdrop_path != undefined) {
    var bgImage = "https://image.tmdb.org/t/p/w500" + itemDetails.backdrop_path;
  } else {
    var bgImage = "https://image.tmdb.org/t/p/w500" + itemDetails.profile_path;
  }
  {
    if (itemDetails.genres != undefined) {
      if (itemDetails.genres[0].name != undefined) {
        var genre1 = itemDetails.genres[0].name;
      }
    }
  }
  {
    if (itemDetails.genres != undefined) {
      if (itemDetails.genres.length > 1) {
        if (itemDetails.genres[1].name != undefined) {
          var genre2 = itemDetails.genres[1].name;
        }
      }
    }
  }
  {
    if (itemDetails.genres != undefined) {
      if (itemDetails.genres.length > 2) {
        if (itemDetails.genres[2].name != undefined) {
          var genre3 = itemDetails.genres[2].name;
        }
      }
    }
  }
  {
    if (itemDetails.genres != undefined) {
      if (itemDetails.genres.length > 3) {
        if (itemDetails.genres[3].name != undefined) {
          var genre4 = itemDetails.genres[3].name;
        }
      }
    }
  }

  return (
    <>
      <div className="">
        <div className="backGround-Image">
          <div
            className="bGround"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="layer"></div>
          </div>
        </div>
        <div className="bg-content container mt-5 pt-4 outLet-container">
          <div className="row py-3">
            <div className="col-md-3">
              <a
                target="_blank"
                href={"https://www.imdb.com/title/" + itemDetails.imdb_id}
                rel="noreferrer"
              >
                <div className="vadio">
                  {itemDetails.poster_path ? (
                    <img
                      className=" w-100 rounded-2 "
                      src={
                        "https://image.tmdb.org/t/p/w500" +
                        itemDetails.poster_path
                      }
                    />
                  ) : (
                    ""
                  )}
                  {itemDetails.logo_path ? (
                    <img
                      className=" w-100"
                      src={
                        "https://image.tmdb.org/t/p/w500" +
                        itemDetails.logo_path
                      }
                    />
                  ) : (
                    ""
                  )}
                  {!itemDetails.poster_path && !itemDetails.profile_path ? (
                    <img className="w-100" height="250" src={image} alt="" />
                  ) : (
                    ""
                  )}
                  <div className="vadio-play rounded-2">
                    <i className="fa-regular fa-circle-play"></i>
                  </div>
                </div>
              </a>

              {/* {itemDetails.backdrop_path ? (<img className=" w-100" src={"https://image.tmdb.org/t/p/w500" + itemDetails.backdrop_path} />) : ""} */}
              {/* {itemDetails.poster_path ? (<img className=" w-100 rounded-2" src={"https://image.tmdb.org/t/p/w500" + itemDetails.poster_path} />) : ""} */}
              {/* {itemDetails.logo_path ? (<img className=" w-100" src={"https://image.tmdb.org/t/p/w500" + itemDetails.logo_path} />) : ""} */}
              {itemDetails.profile_path ? (
                <img
                  className=" w-100"
                  src={
                    "https://image.tmdb.org/t/p/w500" + itemDetails.profile_path
                  }
                />
              ) : (
                ""
              )}
              {!itemDetails.poster_path && !itemDetails.profile_path ? (
                <img className="w-100" height="250" src={image} alt="" />
              ) : (
                ""
              )}
            </div>
            <div className="col-md-9">
              <h2 className="my-3 my-md-0">
                {itemDetails.original_title} {itemDetails.name}
              </h2>
              <div className="my-2 ">
                {itemDetails.release_date ? (
                  <>
                    <small className="">
                      {" "}
                      {itemDetails.release_date
                        .split("-")
                        .splice(0, 1)
                        .join("")}
                    </small>
                    <span className="bg-white mx-2 doted-point"></span>
                  </>
                ) : (
                  ""
                )}
                {itemDetails.runtime ? (
                  <>
                    <small className=""> {itemDetails.runtime} Min</small>
                    <span className="bg-white mx-2 doted-point"></span>
                  </>
                ) : (
                  ""
                )}

                {itemDetails.original_language ? (
                  <>
                    <small className="">
                      {" "}
                      {`${itemDetails.original_language}`.toUpperCase()}{" "}
                    </small>{" "}
                  </>
                ) : (
                  ""
                )}

                {/* <small className=" ms-1">PG-13</small> */}
              </div>

              <div className="col-md-8">
                <button className="btn btn-info p-1 m-2 ms-0">
                  {params.media_type}
                </button>
                {genre1 != undefined ? (
                  <button className="btn btn-info p-1 m-2">{genre1}</button>
                ) : (
                  ""
                )}
                {genre2 != undefined ? (
                  <button className="btn btn-info p-1 m-2">{genre2}</button>
                ) : (
                  ""
                )}
                {genre3 == undefined ? (
                  ""
                ) : (
                  <button className="btn btn-info p-1 m-2">{genre3}</button>
                )}
                {genre4 == undefined ? (
                  ""
                ) : (
                  <button className="btn btn-info p-1 m-2">{genre4}</button>
                )}
                {/* <p className="bg-info">{itemDetails.genres[0]}</p> */}
              </div>
              <div className="row">
                <div className="col-md-6">
                  {itemDetails.name ? (
                    <h5 className="mt-3">
                      Name : <span className=" fs-6">{itemDetails.name}</span>
                    </h5>
                  ) : (
                    ""
                  )}
                  {/* {(itemDetails.name) ? <h5 className="mt-3">Adult : <span className=" fs-6">{(itemDetails.adult)}</span></h5> : ""} */}
                  {/* {(itemDetails.adult == "true") ? <h5 className="mt-3 btn btn-outline-danger">Adult : {<span>True</span>}</h5> : <h5 className="mt-3 ">Adult :{<span className="mx-2 p-2 fs-6 bg-success rounded-5">False</span>} </h5>} */}
                  {itemDetails.vote_average ? (
                    <h5 className="mt-3">
                      Vote :{" "}
                      <span className=" fs-6">{itemDetails.vote_average}</span>
                    </h5>
                  ) : (
                    ""
                  )}
                  {itemDetails.vote_count ? (
                    <h5 className="mt-3">
                      vote_count :{" "}
                      <span className=" fs-6">{itemDetails.vote_count}</span>
                    </h5>
                  ) : (
                    ""
                  )}
                  {itemDetails.popularity ? (
                    <h5 className="mt-3">
                      popularity :{" "}
                      <span className=" fs-6">{itemDetails.popularity}</span>
                    </h5>
                  ) : (
                    ""
                  )}
                  {itemDetails.place_of_birth ? (
                    <>
                      <span className="mt-3 text-info fs-5">
                        Place of Birth :{" "}
                      </span>{" "}
                      <span className=" fs-6">
                        {itemDetails.place_of_birth}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                  {itemDetails.production_countries === undefined ? (
                    ""
                  ) : (
                    <>
                      <span className="mt-3 text-info fs-5">
                        Production Countries :{" "}
                      </span>{" "}
                      <span className=" fs-6">
                        {itemDetails.production_countries[0].name}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {itemDetails.overview ? (
                <div className="accordion bg-black my-2 " id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Description
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body ps-0">
                        <p className="text-muted pt-2">
                          {itemDetails.overview}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {itemDetails.homepage && itemDetails.imdb_id ? (
                <div className="col-md-8">
                  <a
                    target="_blank"
                    href={"https://www.imdb.com/title/" + itemDetails.imdb_id}
                    rel="noreferrer"
                  >
                    <div className="vadio ">
                      <img
                        className=" w-100"
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          itemDetails.backdrop_path
                        }
                        alt=""
                      />
                      <div className="vadio-play opacity-1">
                        <i className="fa-regular fa-circle-play fs-1"></i>
                      </div>
                    </div>
                  </a>
                </div>
              ) : (
                ""
              )}
              <a target="_blank" href={itemDetails.homepage} rel="noreferrer">
                <button className="btn btn-info p-1 me-2 ">
                  Ticket booking
                </button>
              </a>
              <div className="row mt-4 py-2 row-border">
                <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
                  {itemDetails.vote_average ? (
                    <span className=" fs-1 fw-bolder text-gold">
                      {itemDetails.vote_average?.toFixed(1)}
                    </span>
                  ) : (
                    ""
                  )}
                  <span className=" fs-2">Rating</span>
                </div>
                <div className="col-md-6 stars my-3 my-md-0 text-center">
                  <div className="5-stars d-flex justify-content-between  my-1">
                    <small className="fa-fw"> 5 </small>
                    <small className="fa-solid fa-star mx-1 text-gold"></small>
                    <div className="progress w-100 mx-1">
                      <small
                        className="progress-bar progress-bar-striped progress-bar-animated bg-gold rounded w-100"
                        role="progressbar"
                        aria-label="Animated Warning striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></small>
                    </div>
                  </div>
                  <div className="4-stars d-flex justify-content-between my-1">
                    <small className="fa-fw"> 4 </small>
                    <small className="fa-solid fa-star mx-1 text-gold"></small>
                    <div className="progress w-100 mx-1">
                      <small
                        className="progress-bar progress-bar-striped progress-bar-animated bg-gold rounded w-75"
                        role="progressbar"
                        aria-label="Animated Warning striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></small>
                    </div>
                  </div>
                  <div className="3-stars d-flex justify-content-between my-1">
                    <small className="fa-fw"> 3 </small>
                    <small className="fa-solid fa-star mx-1 text-gold"></small>
                    <div className="progress w-100 mx-1">
                      <small
                        className="progress-bar progress-bar-striped progress-bar-animated bg-gold rounded w-50"
                        role="progressbar"
                        aria-label="Animated Warning striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></small>
                    </div>
                  </div>
                  <div className="2-stars d-flex justify-content-between my-1">
                    <small className="fa-fw"> 2 </small>
                    <small className="fa-solid fa-star mx-1 text-gold"></small>
                    <div className="progress w-100 mx-1">
                      <small
                        className="progress-bar progress-bar-striped progress-bar-animated bg-gold rounded w-25"
                        role="progressbar"
                        aria-label="Animated Warning striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></small>
                    </div>
                  </div>
                  <div className="1-stars d-flex justify-content-between my-1">
                    <small className="fa-fw"> 1 </small>
                    <small className="fa-solid fa-star mx-1 text-gold"></small>
                    <div className="progress w-100 mx-1">
                      <small
                        className="progress-bar progress-bar-striped progress-bar-animated bg-gold rounded w-0"
                        role="progressbar"
                        aria-label="Animated Warning striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></small>
                    </div>
                  </div>
                  {/* <i class="fa-regular fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i> */}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {similar[0] ? <h2 className="my-3">Similar Movies</h2> : ""}
            {similar.map((movie, key) => (
              <div key={key} className="col-lg-2 col-md-3 col-sm-6">
                <Link to={"/Tvdetails/" + movie.id + "/" + params.media_type}>
                  <div className="movie position-relative">
                    {movie.poster_path ? (
                      <img
                        className=" w-100"
                        src={
                          "https://image.tmdb.org/t/p/w500" + movie.poster_path
                        }
                      />
                    ) : (
                      ""
                    )}
                    {movie.profile_path ? (
                      <img
                        className=" w-100"
                        src={
                          "https://image.tmdb.org/t/p/w500" + movie.profile_path
                        }
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
                      {movie.title}
                      {movie.name}
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
            ))}
          </div>
          <div className="text-center m-auto mt-3">
            {" "}
            <button
              onClick={seeMore}
              className="btn btn-outline-secondary py-2 pt-1 more-btn mb-4 text-center"
            >
              More Movies{" "}
              <i _ngcontent-too-c7="" className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
