import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
// import style from './Navbar.module.css'
import logoImg from "../images/Letter-N-PNG-Picture.png";

export default function Navbar({ userData, logOut }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bolder normal-font mb-2 mb-lg-0">
            <img className="logoImg" src={logoImg} alt="" /> oxe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Movies
                  </Link>
                  <ul
                    className="dropdown-menu bg-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="movies"
                      >
                        Movies
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="popular"
                      >
                        popular
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="top_rated"
                      >
                        Top_rated
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="now_playing"
                      >
                        Now_playing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    TV Show
                  </Link>
                  <ul
                    className="dropdown-menu bg-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="tv">
                        TV Show
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="airing_today"
                      >
                        Airing_Today
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="popularTv"
                      >
                        Popular
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="on_the_air"
                      >
                        On_The_Air
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    People
                  </Link>
                  <ul
                    className="dropdown-menu bg-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="people"
                      >
                        People
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="about">
                    About me
                  </Link>
                </li>
              </>
            </ul>
            <div className="right-nav navbar-nav ms-auto mb-0 mb-lg-0">
              <div className="social-media navbar-nav flex-row mb-3 mb-lg-0 me-auto">
                <Link className="me-2 text-light d-flex text-decoration-none align-items-center">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link className="mx-2 text-light d-flex text-decoration-none align-items-center">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link className="mx-2 text-light d-flex text-decoration-none align-items-center">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link className="mx-2 text-light d-flex text-decoration-none align-items-center">
                  <i className="fa-brands fa-spotify"></i>
                </Link>
                <Link className="mx-2 text-light d-flex text-decoration-none align-items-center">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </div>
              <ul className="navbar-nav">
                {userData ? (
                  <>
                    <li className="nav-item logout d-flex align-items-center">
                      <span
                        onClick={logOut}
                        className="nav-link px-2 btn btn-outline-warning"
                        aria-current="page"
                      >
                        Logout
                      </span>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="profile"
                      >
                        <Avatar src="/broken-image.jpg" />
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item me-0 me-lg-2">
                      <Link
                        className="nav-link px-2 btn btn-outline-success "
                        aria-current="page"
                        to="login"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link px-2 btn btn-outline-primary"
                        aria-current="page"
                        to="/"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
