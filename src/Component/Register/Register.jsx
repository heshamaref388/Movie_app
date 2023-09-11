import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

export default function Register() {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
  });

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function sendRegistrationDataToApi() {
    let { data } = await axios.post(
      `https://sticky-note-fe.vercel.app/signup`,
      user
    );
    // console.log(data);
    if (data.message === "success") {
      setIsLoading(false);
      navigate("/login");
    } else {
      setError(data.message);
      setIsLoading(false);
    }
  }

  function submitRegistrationForm(e) {
    e.preventDefault(); //to prevent reload.
    setIsLoading(true);

    let validationResult = validateRegistrationForm();
    // console.log(validationResult);
    if (validationResult.error) {
      setIsLoading(false);
      setErrorList(validationResult.error.details);
    } else {
      sendRegistrationDataToApi();
    }
  }

  function validateRegistrationForm() {
    let schema = Joi.object({
      first_name: Joi.string().min(3).max(15).required(),
      last_name: Joi.string().min(3).max(15).required(),
      age: Joi.number().min(16).max(80).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().pattern(/^[A-Z][a-z]{3,6}/),
    });
    return schema.validate(user, { abortEarly: false });
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {error.length > 0 ? (
          <div className="alert alert-danger my-2">{error}</div>
        ) : (
          ""
        )}

        <form onSubmit={submitRegistrationForm}>
          <label htmlFor="first_name"> first_name :</label>
          <input
            onChange={getUserData}
            type="text"
            className="form-control my-2 bg-transparent text-light"
            name="first_name"
            id="first_name"
          />

          {errorList.filter((err) => err.context.label === "first_name")[0] ? (
            <div className="text-danger p-1 mb-0 mt-1 fs-6">
              <small className="m-0">
                {
                  errorList.filter(
                    (err) => err.context.label === "first_name"
                  )[0]?.message
                }
              </small>
            </div>
          ) : (
            ""
          )}

          <label htmlFor="last_name"> last_name :</label>
          <input
            onChange={getUserData}
            type="text"
            className="form-control my-2 bg-transparent text-light"
            name="last_name"
            id="last_name"
          />

          {errorList.filter((err) => err.context.label === "last_name")[0] ? (
            <div className="text-danger p-1 mb-0 mt-1 fs-6">
              <small className="m-0">
                {
                  errorList.filter(
                    (err) => err.context.label === "last_name"
                  )[0]?.message
                }
              </small>
            </div>
          ) : (
            ""
          )}

          <label htmlFor="age"> age :</label>
          <input
            onChange={getUserData}
            type="number"
            className="form-control my-2 bg-transparent text-light"
            name="age"
            id="age"
          />

          {errorList.filter((err) => err.context.label === "age")[0] ? (
            <div className="text-danger p-1 mb-0 mt-1 fs-6">
              <small className="m-0">
                {
                  errorList.filter((err) => err.context.label === "age")[0]
                    ?.message
                }
              </small>
            </div>
          ) : (
            ""
          )}

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
            {isLoading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
