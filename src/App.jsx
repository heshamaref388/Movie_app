import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Register from "./Component/Register/Register";
import TV from "./Component/TV/TV";
import People from "./Component/People/People";
import PopularMovie from "./Component/PopularMovie/PopularMovie";
import Top_rated from "./Component/Top_rated/Top_rated";
import Now_playing from "./Component/Now_playing/Now_playing";
import Movies from "./Component/Movies/Movies";
import Login from "./Component/Login/Login";
import Notfound from "./Component/Notfound/Notfound";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Profile from "./Component/Profile/Profile";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import MovieDetails from "./Component/MovieDetails/MovieDetails";
import PopularTv from "./Component/PopularTv/PopularTv";
import Airing_Today from "./Component/Airing_Today/Airing_Today";
import On_The_Air from "./Component/On_The_Air/On_The_Air";

function App() {
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      saveUserData();
    }
  }, []);

  const [userData, setUserData] = useState(null);

  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    return <Navigate to="/login" />;
  }

  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    // console.log(decodedToken);
    setUserData(decodedToken);
  }
  // userData = { userData };

  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout logOut={logOut} />,
      children: [
        {
          path: "home",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "moviedetails/:id/:media_type",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              <MovieDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <About />
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { index: true, element: <Register /> },
        {
          path: "movies",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <Movies />
            </ProtectedRoute>
          ),
        },
        {
          path: "people",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <People />
            </ProtectedRoute>
          ),
        },
        {
          path: "popular",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <PopularMovie />
            </ProtectedRoute>
          ),
        },
        {
          path: "popularTv",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <PopularTv />
            </ProtectedRoute>
          ),
        },
        {
          path: "airing_today",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <Airing_Today />
            </ProtectedRoute>
          ),
        },
        {
          path: "on_the_air",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <On_The_Air />
            </ProtectedRoute>
          ),
        },
        {
          path: "top_rated",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <Top_rated />
            </ProtectedRoute>
          ),
        },
        {
          path: "now_playing",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <Now_playing />
            </ProtectedRoute>
          ),
        },
        {
          path: "tv",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <TV />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute saveUserData={saveUserData}>
              {" "}
              <Profile />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
// userData = { userData };
