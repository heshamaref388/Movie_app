import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaItempeople from "../MediaItempeople/MediaItempeople";

export default function Movies() {
  const [trendingMovies, settrendingMovies] = useState([]);

  async function getTrending() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/person/week?api_key=34d2e2cb1e0798d6b0c47746202348cb`
    );
    settrendingMovies(data.results);
    // console.log(data.results);
  }
  useEffect(() => {
    getTrending();
  }, []);
  return (
    <>
      <div className="container mt-5 pt-4 outLet-container">
        <div className="row mt-4">
          <div className="col-md-4 d-flex align-items-center">
            <div>
              <div className="brdr mb-4 w-25"></div>
              <h2 className="h4">
                Trending <br /> People <br /> To Watch Right Now
              </h2>
              <p className="text-muted py-3">Most Watched People by Days</p>
              <div className="brdr mt-3 w-100"></div>
            </div>
          </div>

          {trendingMovies.map((movie, index) => (
            <MediaItempeople movie={movie} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
