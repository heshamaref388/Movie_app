import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaItemTv from "../MediaItemTv/MediaItemTv";

export default function PopularTv() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [count, setNewcount] = useState(1);

  async function getTrending() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=34d2e2cb1e0798d6b0c47746202348cb&language=en-US&page=${count}`
    );
    setTrendingMovies(data.results);
    // console.log(data.results);
  }
  useEffect(() => {
    getTrending();
  }, [count]);
  function seeMore() {
    let newCount = count;
    newCount += 1;
    setNewcount(newCount);
  }
  return (
    <>
      <div className="container mt-5 pt-4 outLet-container">
        <div className="row mt-4">
          <div className="col-md-4 d-flex align-items-center">
            <div>
              <div className="brdr mb-4 w-25"></div>
              <h2 className="h4">
                Trending <br /> TV Shows <br /> To Watch Right Now
              </h2>
              <p className="text-muted py-3">Most Watched TV by Days</p>
              <div className="brdr mt-3 w-100"></div>
            </div>
          </div>

          {trendingMovies.map((movie, index) => (
            <MediaItemTv movie={movie} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center m-auto">
        {" "}
        <button
          onClick={seeMore}
          className="btn btn-outline-secondary py-2 pt-1 more-btn mb-4 text-center"
        >
          More Movies{" "}
          <i _ngcontent-too-c7="" className="fas fa-angle-right"></i>
        </button>
      </div>
    </>
  );
}
