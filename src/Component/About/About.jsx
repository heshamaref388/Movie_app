import React from "react";
import image from "../images/photo_2023-02-18_17-31-17.jpg";
export default function About() {
  return (
    <div className=" d-flex justify-content-center align-items-center profile">
      <div className=" ">
        {" "}
        <div className=" text-center col-md-4 w-25 m-auto mb-3">
          <img
            src={image}
            alt=""
            className="w-100 text-center rounded-circle "
          />
        </div>
        <div className="mb-3">Name : Hesham Aref Abd_Elsalam Mohamed</div>
        <div className="mb-3">Age : 22</div>
        <div className="mb-3">Email :heshamaref38@gmail.com</div>
        <div className="mb-3">
          LinkdedIn :{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hesham-aref-b14b53255"
            rel="noreferrer"
          >
            linkedin Account
          </a>{" "}
        </div>
        <div className="mb-3">
          facebook :{" "}
          <a
            target="_blank"
            href="https://www.facebook.com/hesham.aref.980?mibextid=ZbWKwL"
            rel="noreferrer"
          >
            facebook Account
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
