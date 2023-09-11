import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

export default function Login({ saveUserData }) {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function sendLoginDataToApi() {
    let { data } = await axios.post(
      `https://sticky-note-fe.vercel.app/signin`,
      user
    );
    // console.log(data);
    if (data.message === "success") {
      setIsLoading(false);
      localStorage.setItem("userToken", data.token);
      saveUserData();
      navigate("/home");
    } else {
      setError(data.message);
      setIsLoading(false);
    }
  }

  function submitLoginForm(e) {
    e.preventDefault(); //to prevent reload.
    setIsLoading(true);

    let validationResult = validateLoginForm();
    // console.log(validationResult);
    if (validationResult.error) {
      setIsLoading(false);
      setErrorList(validationResult.error.details);
    } else {
      sendLoginDataToApi();
    }
  }

  function validateLoginForm() {
    let schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().pattern(/^[A-Z][a-z]{3,6}/),
    });
    return schema.validate(user, { abortEarly: false });
  }

  return (
    <div className="container">
      <div className="row">
        <form className="my-5" onSubmit={submitLoginForm}>
          <h2 className="my-4">Login Form</h2>

          <label htmlFor="email"> email :</label>
          <input
            onChange={getUserData}
            type="email"
            className="form-control my-2 bg-transparent text-light"
            name="email"
            id="email"
          />

          {errorList.filter((err) => err.context.label === "email")[0] ? (
            <div className="text-danger p-1 mb-0 mt-1 fs-6">
              <small className="m-0">
                {
                  errorList.filter((err) => err.context.label === "email")[0]
                    ?.message
                }
              </small>
            </div>
          ) : (
            ""
          )}

          <label htmlFor="password"> password :</label>
          <input
            onChange={getUserData}
            type="password"
            className="form-control my-2 bg-transparent text-light"
            name="password"
            id="password"
          />

          {errorList.filter((err) => err.context.label === "password")[0] ? (
            <div className="text-danger p-1 mb-0 mt-1 fs-6">
              <small className="m-0">
                <p className="m-0">
                  {" "}
                  Password Should Start by Capital letter and 3 : 6 small
                  letters
                </p>
              </small>
            </div>
          ) : (
            ""
          )}

          <button type="submit" className="btn btn-info my-2">
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
