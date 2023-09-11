import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaItem from "../MediaItem/MediaItem";

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPerson, setTrendingPerson] = useState([]);

  async function getTrending(mediaType, func) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=34d2e2cb1e0798d6b0c47746202348cb`
    );
    func(data.results);
  }

  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPerson);
  }, []);

  return (
    <>
      {trendingMovies.length > 0 ? (
        <div className="container mt-5 pt-4 outLet-container">
          <div className="row mt-4">
            <div className="col-md-4 d-flex align-items-center">
              <div>
                <div className="brdr mb-4 w-25"></div>
                <h2 className="h4">
                  Trending <br />
                  Movies <br /> To Watch Right Now
                </h2>
                <p className="text-muted py-3">Most Watched Movies by Days</p>
                <div className="brdr mt-3 w-100"></div>
              </div>
            </div>
            {trendingMovies.slice(0, 10).map((movie, index) => (
              <MediaItem movie={movie} key={index} />
            ))}
          </div>

          <div className="row py-5">
            <div className="col-md-4 d-flex align-items-center">
              <div>
                <div className="brdr mb-4 w-25"></div>
                <h2 className="h4">
                  Trending <br /> Tv <br /> To Watch Right Now
                </h2>
                <p className="text-muted py-3">Most Watched Tv by Days</p>
                <div className="brdr mt-3 w-100"></div>
              </div>
            </div>
            {trendingTv.slice(0, 10).map((movie, index) => (
              <MediaItem movie={movie} key={index} />
            ))}
          </div>
          <div className="row">
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
            {trendingPerson.slice(0, 10).map((movie, index) => (
              <MediaItem movie={movie} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="spinner">
          <div className="spinner-grow " role="status">
            <span className="visually-hidden"></span>
          </div>{" "}
        </div>
      )}
    </>
  );
}
